---
title: 'How I got a free .tech domain for a year (Sri Lanka guide)'
description: 'Step-by-step: claim a free .tech domain with the Hacktoberfest perk, avoid the two settings that cost people money, and connect it to a website.'
pubDate: 2026-10-24
tags: ['domains', 'free-tools', 'hacktoberfest']
cover: '/images/free-tech-domain.jpg'
coverAlt: 'Free .tech domain for one year with the Hacktoberfest perk, Rs. 0 in Sri Lanka'
---

This site runs on a domain I didn't pay for. The Hacktoberfest developer perk gives you a **.tech domain free for one year**, and it works from Sri Lanka with a normal Gmail account. Here's exactly how I did it - including the two settings that trip most people up.

> Perks are limited and the terms can change, so check the offer page before you start.

## Before you start

You need all three of these, or the promo code won't appear:

- A **GitHub account that is at least 30 days old**
- An **MLH account that is at least 7 days old**
- To **redeem the code before 13 December**

If either account is brand new, create it today and come back once it's old enough.

## Step 1 - Sign up

Go to `hacktoberfest.com/my/promos` and sign up with your Gmail. You'll get a one-time code by email to finish signing in.

## Step 2 - Verify your phone

Add your mobile number and enter the OTP. Refresh the page and it should show as verified.

## Step 3 - Connect GitHub

Under social connections, add GitHub and authorize it. Refresh again.

## Step 4 - Get your promo code

Click **Get your code** and copy the code it gives you. It's unique to you.

## Step 5 - Search for your domain

Open `get.tech`, search for the name you want and add it to the cart. Short and easy to say works best - your own name is a good choice.

## Step 6 - Apply the code

Paste your promo code in the cart. The price for the first year should drop to **Rs. 0**.

## Step 7 - Turn privacy protection OFF

This is the step most people miss. If **Privacy Protection** is left on, the discount doesn't apply. Switch it off before you place the order.

## Step 8 - Create an account and confirm

You'll create a get.tech account (name and a few details) and confirm the order. It asks for card details, but because the total is zero, nothing is charged - you'll get a receipt by email.

## Step 9 - Turn auto-renew OFF

The domain is set to **auto-renew** by default, which means you'd be charged automatically when the free year ends. Go to **Manage domain** and disable auto-renew straight away. You can always renew manually later if you want to keep it.

## Connecting the domain to a website

You have two options:

| Option | What you change | Good for |
|---|---|---|
| Nameservers | Point the domain to your host (e.g. Vercel, Netlify) | Letting the host manage DNS |
| DNS records | Add `A` / `CNAME` records for the site, `MX` for email | Keeping DNS at get.tech |

This blog is hosted on **Azure Static Web Apps** (free tier, free SSL). I'll write up that setup in the next post.

---

Got stuck on a step? Leave a comment on the YouTube video and I'll help you out.
