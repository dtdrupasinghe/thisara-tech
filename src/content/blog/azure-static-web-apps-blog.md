---
title: 'How I host this blog on Azure Static Web Apps for free'
description: 'A step-by-step guide to deploying an Astro site on Azure Static Web Apps (Free plan) with GitHub, automatic deploys, a custom domain and free SSL.'
pubDate: 2026-10-24
tags: ['azure', 'static-web-apps', 'astro', 'free-tools']
cover: '/images/azure-static-web-apps-blog.jpg'
coverAlt: 'Host your blog on Azure Static Web Apps for free'
---

This blog costs me nothing to host. It's a static site built with [Astro](https://astro.build), deployed to **Azure Static Web Apps** on the Free plan, and every time I push a new post to GitHub it goes live automatically. Here's the full setup - the same steps work for any static site (plain HTML, Hugo, Vite, Next.js static export and so on).

## Why Azure Static Web Apps?

A "static" site is just HTML, CSS, JavaScript and images - no server running code for every visitor. That makes it fast, cheap and hard to break. Azure Static Web Apps (SWA) is built for exactly this:

- Your files are served from a **global network**, so pages load fast everywhere
- **Free SSL certificates** for your custom domain, renewed automatically
- **GitHub integration** - push code, and Azure builds and deploys it
- **Preview environments** for pull requests, so you can check changes before they go live

### Free vs Standard plan

For a personal blog, the Free plan is more than enough:

| | Free | Standard |
|---|---|---|
| Custom domains per app | 2 | 5 |
| App size | 250 MB | 500 MB |
| Staging (preview) environments | 3 | 10 |
| Free auto-renewing SSL | Yes | Yes |
| SLA | No | Yes |

Two custom domains is perfect: one for `www.yourname.tech` and one for the root `yourname.tech`.

## What you need

- An **Azure account** (a free account or Azure for Students works)
- A **GitHub account**
- Your site's code in a folder on your computer
- Optionally, a domain - I got mine free, [here's how](/blog/free-tech-domain/)

## Step 1 - Push your site to GitHub

Create a new repository on GitHub (it can be private), then push your project:

```bash
git init
git add .
git commit -m "First version"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Make sure `node_modules/` and your build folder (`dist/` for Astro) are in `.gitignore`. Azure builds the site itself, so you only push the source.

## Step 2 - Create the Static Web App

In the [Azure portal](https://portal.azure.com):

1. Search for **Static Web Apps** and select **Create**.
2. Pick your subscription and create a new resource group (I used `rg-blog`).
3. Give the app a name and choose the **Free** plan.
4. Under **Deployment details**, choose **GitHub**, sign in, and select your organisation, repository and the `main` branch.
5. Under **Build details**, choose the preset for your framework. For this blog:

| Field | Value |
|---|---|
| Build presets | Astro |
| App location | `/` |
| Api location | *(leave empty)* |
| Output location | `dist` |

6. Select **Review + create**, then **Create**.

> For a plain HTML site with no build step, choose the **Custom** preset, set the app location to the folder with your `index.html`, and leave the output location empty.

## Step 3 - Watch the first deploy

When you create the app, Azure adds a **GitHub Actions workflow file** to your repo (under `.github/workflows/`) and stores a deployment token as a repository secret. That workflow runs on every push to `main`: it installs dependencies, builds the site and uploads it.

Open the **Actions** tab on GitHub to watch it. After a couple of minutes it should go green. Back in the Azure portal, the app's **Overview** page shows a default URL like `https://<random-name>.azurestaticapps.net` - open it and your site is live.

> **Tip:** the build uses the Node.js version from the `"engines"` field in `package.json`. Astro 6 needs Node 22.12 or newer, so this project sets `"engines": { "node": ">=22.12.0" }`. If your build fails with a Node version error, this is the first thing to check.

## Step 4 - Add your custom domain

### The `www` subdomain (easiest)

1. In your Static Web App, open **Custom domains** and select **+ Add → Custom domain on other DNS**.
2. Enter `www.yourname.tech` and choose **CNAME**.
3. In your domain provider's DNS settings, add:

| Type | Host | Value |
|---|---|---|
| CNAME | `www` | `<random-name>.azurestaticapps.net` |

4. Back in Azure, select **Add**. Once DNS updates, Azure validates the domain and issues a free SSL certificate automatically.

### The root domain (`yourname.tech`)

A root (apex) domain can't use a normal CNAME, so it takes two parts:

**1. Prove you own it.** Add the domain in **Custom domains**, choose **TXT**, select **Generate code**, then add this record at your DNS provider:

| Type | Host | Value |
|---|---|---|
| TXT | `@` | the generated code |

**2. Point it at the site.** Use the first option your DNS provider supports:

- **ALIAS / ANAME record** (best) - host `@`, value `<random-name>.azurestaticapps.net`
- **Domain forwarding** - forward `yourname.tech` to `https://www.yourname.tech`
- **A record** (last resort) - host `@`, value the `stableInboundIP` from your app's **Overview → JSON View**. It works, but traffic is served from one region instead of globally.

DNS changes can show up in minutes, but Microsoft notes root-domain changes can take **up to 72 hours**. Be patient before assuming something is broken.

## Step 5 - Configure routing (optional but useful)

Azure reads a `staticwebapp.config.json` file from your built site. For Astro, put it in the `public/` folder so it's copied into `dist/`. This is what I use:

```json
{
  "trailingSlash": "auto",
  "responseOverrides": {
    "404": { "rewrite": "/404.html", "statusCode": 404 }
  },
  "globalHeaders": {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
}
```

- `responseOverrides` shows my custom 404 page instead of Azure's default one
- `trailingSlash` keeps URLs like `/blog/` and `/blog` working
- `globalHeaders` adds a couple of basic security headers to every response

## How I publish a new post now

This is the part I like most:

1. Write a new Markdown file in `src/content/blog/`
2. Preview it locally with `npm run dev`
3. `git add`, `git commit`, `git push`

GitHub Actions builds the site and Azure publishes it - usually in about two minutes. No servers to patch, no FTP, no bills.

## Troubleshooting

| Problem | What to check |
|---|---|
| Build fails on GitHub Actions | Open the failed run's log. Node version errors → set `"engines"` in `package.json`. Missing files → check your app/output location. |
| Site shows Azure's default page | The output location is wrong (for Astro it must be `dist`). |
| Custom domain stuck on "Validating" | Check the DNS record with `nslookup www.yourname.tech`, and give it time to propagate. |
| 404 on page refresh | Add `staticwebapp.config.json` with a 404 rewrite, as above. |

## What it costs

On the Free plan: **nothing**. No credit card charges for hosting, SSL or deployments. If the site ever outgrows it - bigger than 250 MB, needs an SLA or more domains - the Standard plan is there.

---

Next, I'll write about adding a free custom email address on the same domain. If you get stuck on any step, leave a comment on the YouTube video and I'll help.
