# thisara.tech

Personal blog built with [Astro](https://astro.build) and hosted on **Azure Static Web Apps (Free plan)**.

## Run it on your computer

Needs **Node.js 22.12 or newer**.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs the static site to dist/
```

## Write a new post

1. Copy `src/content/blog/_template.md` and rename it, e.g. `azure-budget-alerts.md`
   (no `_` at the start - files starting with `_` are not published).
2. Edit the title, description, date and tags at the top.
3. Write the post in Markdown. Put images in `public/images/` and use `![alt text](/images/name.png)`.
4. Keep `draft: true` while writing; drafts only show in `npm run dev`. Remove it to publish.
5. Commit and push - Azure builds and publishes the site automatically in a couple of minutes.

The file name becomes the URL: `azure-budget-alerts.md` → `https://thisara.tech/blog/azure-budget-alerts/`.

Change the site name, tagline and social links in `src/consts.ts`. Colours and fonts are in `src/styles/global.css`.

---

## Deploy to Azure (one-time setup)

### 1. Push the code to GitHub

```bash
git init
git add .
git commit -m "First version of thisara.tech"
git branch -M main
git remote add origin https://github.com/<your-username>/thisara-tech.git
git push -u origin main
```

### 2. Create the Static Web App

In the Azure portal: **Create a resource → Static Web App**

| Setting | Value |
|---|---|
| Plan type | **Free** |
| Source | GitHub → pick the `thisara-tech` repo, branch `main` |
| Build presets | **Astro** |
| App location | `/` |
| Api location | *(leave empty)* |
| Output location | `dist` |

Azure adds a GitHub Actions workflow to the repo and runs the first deploy. When it finishes,
the **Overview** page shows the default URL (something like `https://<random-name>.azurestaticapps.net`).

The Node version used in the Azure build comes from `"engines"` in `package.json`.

### 3. Connect `www.thisara.tech`

1. Static Web App → **Custom domains → + Add → Custom domain on other DNS**.
2. Enter `www.thisara.tech`, choose **CNAME**, and copy the value Azure shows (the default `*.azurestaticapps.net` host name).
3. In your get.tech DNS settings add:

   | Type | Host | Value |
   |---|---|---|
   | CNAME | `www` | `<random-name>.azurestaticapps.net` |

4. Back in Azure, select **Add/Validate**. A free SSL certificate is created automatically.

### 4. Connect the root domain `thisara.tech`

1. Static Web App → **Custom domains → + Add**, enter `thisara.tech`.
2. Choose **TXT**, select **Generate code**, and add it in get.tech DNS:

   | Type | Host | Value |
   |---|---|---|
   | TXT | `@` | the generated code |

3. Then point the root domain at the site, using the first option your DNS provider supports:
   - **ALIAS / ANAME record** (best): Host `@` → the default `*.azurestaticapps.net` host name (no `https://`).
   - **Domain forwarding**: forward `thisara.tech` to `https://www.thisara.tech`.
   - **A record** (last resort): Host `@` → the `stableInboundIP` value from the Static Web App's
     **Overview → JSON View**. This works but serves from one region only.

DNS changes can take from a few minutes up to 72 hours for root domains.

Reference: [Custom domains with Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/custom-domain),
[Apex domain with an external DNS provider](https://learn.microsoft.com/azure/static-web-apps/apex-domain-external).
