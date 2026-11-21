# The Open Source

The **Top 10 open-source projects most likely to blow up**, ranked and written up fresh every day.

## ⭐ Start here

1. **Read today's Top 10** — https://daily-open-source-rankings.netlify.app — every project on the list opens its live app or its GitHub repo in one tap.
2. **Create a free account** — https://daily-open-source-rankings.netlify.app/join.html — name + email, and the Top 10 lands in your inbox every morning. Free forever, no card, unsubscribe anytime.
3. **Grab the free Starter Stack** — 12 free tools that replace paid subscriptions, on the Stan store: https://stan.store/hunter82

## Latest Top 10 — November 18, 2026

**Your mouse dying with zero warning?** A tiny free tool shows the battery of your mouse, keyboard, headphones and controller right on your screen — 1,900 people grabbed it in a single day. It's #1 in today's Top 10 free AI tools, every one explained in plain English: what it does, why you'd want it, no tech degree needed.

Read the full list free: https://daily-open-source-rankings.netlify.app — a new Top 10 lands every morning. Subscribe on the site and it comes to your inbox.

1. **Wireless Device Battery Monitor** — see your mouse, keyboard, headset and controller battery at a glance (+1,914 in one day) — https://github.com/krisgfx9/Wireless-Device-Battery-Monitor
2. **rea** — point your AI helper at any app and learn how it works (+1,346) — https://github.com/morluto/rea
3. **ARTEX** — a self-hosted AI security tester that probes your own systems for weaknesses (+1,293) — https://github.com/BaaRai/ARTEX
4. **Claude BugHunter** — 83 AI skills that hunt bugs in your code for you (+1,252) — https://github.com/elementalsouls/Claude-BugHunter
5. **rust-anything** — records what your program does, then checks every step for mistakes (+1,046) — https://github.com/erkamyaman/rust-anything
6. **paper-orchestra** — a team of AI agents from Google that turns rough ideas into finished research (+976) — https://github.com/google-research/paper-orchestra
7. **misterdownloadmanager** — a clean, from-scratch download manager in Rust (+817) — https://github.com/anefzaoui/misterdownloadmanager
8. **t3code** — one control panel for all the AI coding helpers on your machine (+805) — https://github.com/pingdotgg/t3code
9. **openmotion** — an open-source AI video studio: upload a clip, describe the edit, get a video back (+775) — https://github.com/nexu-io/openmotion
10. **dsh-our-free-model** — a plug-in that fills the DeepSeek app with free AI models to pick from (+751) — https://github.com/Ebony-Vinyl/dsh-our-free-model

Want the step-by-step system for using AI to make money? That's on the Stan store: https://stan.store/hunter82

**Live site:** https://daily-open-source-rankings.netlify.app — an interactive station with an animated background, a slide-out side panel with an AI assistant that searches the full archive, and video screens that rotate every couple of hours — including the host, at work in the Operator Suite office.

## What's in this repo

- `index.html` — the interactive site (fixed video background, hamburger side panel, saved AI chats, scrolling articles)
- `data.js` / `editions.json` — every edition's article and Top 10 list, powering the site and the assistant
- `editions/` — static archive pages, one per day
- `answers/` — answer pages for the questions people ask search engines and AI assistants ("What's the best free alternative to ChatGPT?")
- `join.html` — the free-account / email signup page
- `about.html`, `privacy.html`, `thanks.html`, `styles.css` — the rest of the site

Media (the background video, the video screens, and the daily banner images) is served from the live site and is not stored in this repo.

## How it works

Every morning, the newest trending open-source projects from the last 24 hours are researched, ranked by star velocity, novelty, and usefulness, and written up in plain language — what each project does, why it matters, and who it is for. This repo updates itself with the new edition every day.

## Donations — Buy Me a Coffee (Stripe)

The gold ☕ Donate button (top bar) and the "Buy me a coffee" button in the support section both point at one config spot: the `DONATE_URL` constant at the top of the inline script in `index.html`.

- **Status (Nov 14, 2026): PLACEHOLDER.** `DONATE_URL` is `https://buy.stripe.com/REPLACE-WITH-DONATION-LINK` — it goes nowhere useful until the real link exists.
- **To go live:** after the Stripe account reconnect, create a Payment Link in the Stripe Dashboard (Payments → Payment Links), paste the URL into `DONATE_URL` in `index.html`, and redeploy. Donations then land in Ken's Stripe account. Never put a Stripe secret key in this repo.

## Banner spec (for the daily edition generator)

- Every daily banner is generated at **2400×1000** — one size, every day, so the archive grid and social crops stop jumping between aspect ratios.
- Brief each banner with the #1 project's domain (a subtle browser-window motif for a web-guidance day, a container motif for a runtime day) — same navy/gold palette, no text in the image (text breaks the social crops).

## Try these — free tiers and free trials

- **Meridian** — my AI receptionist for local businesses (never miss a call again). Free 7-day pilot, no setup fee: https://meridian-open.netlify.app — start the pilot here: https://buy.stripe.com/00wbJ30gdgYl9RWbSa7ok0B
- **Railway** — where I host my backends. New accounts start with free trial credit: https://railway.com?referralCode=j5Yo2Z
- **Beehiiv** — my newsletter runs on its free tier: https://www.beehiiv.com
- **GitHub** — free tier, hosts this repo and all my code: https://github.com

## My links

- **Stan Store** — my digital products: https://stan.store/hunter82
- **The AI Advantage newsletter** — free, twice a week: https://theaiadvantagenewsletter.beehiiv.com
- **Sell on Stan yourself** — my referral link: https://join.stan.store/hunter82

By Kenny Hunter — The AI Advantage. Also posted daily to X (@Ken98001712), YouTube (@TheAIAdvantage101), and TikTok (@hunter82kh).
