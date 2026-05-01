# Prompt per a Claude Design — FeaturePin Landing Page

---

## Context

You are designing the landing page for FeaturePin, a B2B SaaS tool for in-app announcements and feature adoption nudges. The target audience is Product Managers, Product Owners, and CEOs at SaaS companies of 10 to 80 people.

The copy is final and must not be changed. Your job is to design around it, not rewrite it.

---

## Brand personality

FeaturePin has three defining traits: **minimalist, pragmatic, smooth.**

The brand archetype is the Pragmatic Rebel — opinionated, direct, anti-bullshit. The closest reference in terms of tone and attitude is Basecamp: confident, human, no corporate fluff.

The enemy is complexity. Most competitors (Userguiding, Appcues, Pendo) have become bloated enterprise tools. FeaturePin exists as the reaction to that excess. The design must feel like a breath of fresh air compared to those products.

---

## Visual references

Design in the spirit of these products:

- **Linear** — precision, information density without noise, elegant dark aesthetic, every element justified
- **Raycast** — UI as a sales argument, built for professionals, product-led feel
- **Stripe** — trust conveyed through design, clear pricing, impeccable documentation layout

The result should feel like a tool made by someone who cares deeply about craft. Functional beauty. Nothing decorative that doesn't serve a purpose.

---

## Visual direction

**Typography**
Sans-serif geometric. Inter or Geist. Clean, readable, modern. Strong typographic hierarchy — the headlines should do the heavy lifting.

**Color palette**
Minimalist. Two options:

Option A (dark): very dark background (near black), off-white text, one vivid accent color for CTAs and highlights. Think Linear or Raycast.

Option B (light): off-white or very light grey background, near-black text, one vivid accent color. Think Stripe.

Pick whichever feels more aligned with the brand. The accent color should feel energetic but not aggressive — consider electric cyan, a sharp green, or a warm orange. One accent only.

**No gradients** — or if used, extremely subtle. No rainbow gradients, no mesh gradients.

**No illustrations** — no blob characters, no abstract shapes, no Notion-style doodles. If you need visual elements, use sharp icons, code snippets shown as UI, or product UI mockups.

**No stock photos** — no smiling people in front of laptops.

**Spacing** — generous. Let the content breathe. This is not a dense marketing page, it is a precise, confident statement.

---

## Page structure and copy

The copy is final. Use it exactly as written — do not paraphrase, summarize, or rewrite. Every section below must appear on the page.

### 1. Navigation
Logo (FeaturePin wordmark) on the left. On the right: "Pricing" link, "Docs" link (placeholder), and a "Start for free" CTA button in the accent color.

### 2. Hero
Headline: **You shipped it. Now make sure they use it.**

Subheadline: Most features go unnoticed — not because they're bad, but because nobody told your users. FeaturePin fixes that in 5 minutes.

CTA button: **Start for free** (primary, accent color, prominent)

Secondary note below the button: No credit card required.

The hero should feel bold and confident. The headline is the main event — size it accordingly.

### 3. Pain
Title: **Sound familiar?**

Body: You open Amplitude three weeks after launch. Feature adoption: 12%. Your team spent a month on it. Nobody knows it exists.

This section should feel like a gut punch — the PM reads it and nods. Consider a slightly different background treatment to create visual separation.

### 4. Solution
Title: **FeaturePin does two things. Both matter.**

Two feature blocks side by side (or stacked on mobile):

**Announce** — Tell your users what's new. Modal, banner, or tooltip. No engineering required.

**Nudge** — Detect users who haven't tried a feature and reach them automatically. Set the rule once, FeaturePin does the rest.

Each block can have a small sharp icon (not an illustration). Keep it minimal.

### 5. How it works
Title: **Up and running in 5 minutes.**

Three steps in a horizontal flow (or numbered list):

1. **See it work** — Give us your features or pricing page URL. We generate 10 ready-to-publish announcements and nudges instantly.
2. **Install** — Paste one snippet into your product. That's it.
3. **Ship** — Launch to all users or a specific segment. Watch the adoption move.

Consider showing a minimal UI mockup of the dashboard here — even a simplified wireframe-style representation of what the generated pins look like.

### 6. Pricing
Title: **Honest pricing. No surprises.**

Four plans in a clean table or card layout:

| Plan | Price | Limit |
|---|---|---|
| Free | $0 | Up to 1,000 monthly active users. All features. FeaturePin branding. |
| Grow | $29/month | Up to 10,000 monthly active users. No branding. |
| Scale | $79/month | Up to 25,000 monthly active users. |
| Enterprise | Let's talk | 25,000+ monthly active users. |

Below the plans: "No trials. No demos. No negotiations. Start free, upgrade when you grow."

Highlight the Grow plan as the recommended option.

### 7. FAQ
Title: no title needed — or simply "Questions."

Five questions in an accordion or clean list:

**What's a MAU?**
A monthly active user is anyone who logs into your product at least once a month.

**Do I need to involve engineering?**
Just once, to paste a one-line snippet. After that, you're on your own.

**Can I cancel anytime?**
Yes. No contracts, no commitments.

**What happens if I exceed my MAU limit?**
We'll let you know. You won't get cut off without warning.

**Why not build it ourselves with AI?**
You could. It would take 3 to 4 weeks of engineering time, and then someone has to maintain it. FeaturePin is running in 5 minutes — and comes with something you can't build alone: adoption benchmarks by industry vertical, so you know if your 12% is good or terrible compared to products like yours.

### 8. Final CTA
Headline: **Your next feature deserves to be seen.**

Body: Start for free. No credit card required.

CTA button: **Start for free**

This section should close the page with energy. Full-width background treatment, different from the rest of the page.

### 9. Footer
Minimal. Logo, copyright, links to Privacy Policy and Terms (placeholders).

---

## Technical requirements

- Deliver a single HTML file with embedded CSS. No external dependencies except Google Fonts (Inter or Geist).
- Fully responsive — must look excellent on desktop (1280px+) and mobile (375px).
- No JavaScript required for layout. If you add any JS, it should be minimal and optional (e.g., accordion for FAQ).
- Use semantic HTML5 elements (header, main, section, footer, nav).
- The accent color and background color should be defined as CSS custom properties at the top so they are easy to change.

---

## What to avoid

- Do not add sections not listed above
- Do not invent features or benefits not mentioned in the copy
- Do not use "AI-powered" as a marketing claim anywhere
- Do not add testimonials or logos (we have none yet — do not invent them)
- Do not use gradients on text
- Do not center-align body text (headlines only)
- Do not use more than two font weights
