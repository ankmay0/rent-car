# Aditi Cab Service — SEO + AI-SEO Action Plan

**Goal:** rank for local/intent searches ("car rental in Ranchi", "Ranchi to Deoghar taxi
fare", "airport cab Birsa Munda", "bus hire Ranchi") **and** get cited by AI assistants
(Google AI Overviews, ChatGPT/Copilot, Perplexity, Gemini).

**Decisions locked in:**
- Domain: *you will paste it* — everywhere below marked `https://REPLACE-DOMAIN.com` must be swapped.
- NAP (name/address/phone): **shown** as real text + in schema (keep lead-capture gate as the main CTA).
- Google Business Profile: **not set up yet** → Tier 0 below is your #1 priority.
- Scope: this is the plan; I implement after you approve + paste the domain.

**Known business facts (used in the schema/content below — please confirm):**
- Name: **Aditi Cab Service** (alt: "Aditi Car Rental")
- Address: **Sector 2, Dhurwa, Ranchi, Jharkhand** — near Panchmukhi Mandir — *confirm PIN (likely 834004)*
- Phone: **+91 79798 89706** (currently base64-hidden in `script.js`)
- Hours: **24×7**
- Services: local rides, outstation, airport transfer, wedding/events, corporate, bus/tempo, goods
- Fleet & indicative fares: Hatchback ₹11–12/km · Sedan ₹12–15/km · SUV ₹16–17/km · Luxury & Bus on request

---

## TIER 0 — Off-site foundation (do this FIRST — biggest impact, free)

For a local cab service this outranks anything on the website.

1. **Create & verify Google Business Profile** → https://business.google.com
   - Category: **Car rental agency** (primary) + add **Taxi service**, **Bus charter**, **Airport shuttle service**.
   - Exact NAP identical to the website (same spelling/format everywhere — this consistency is a ranking signal).
   - Service area: Ranchi + Jharkhand cities you cover (Jamshedpur, Deoghar, Bokaro, Hazaribagh, Dhanbad, Patna…).
   - Hours: Open 24 hours. Add phone, website URL, WhatsApp.
   - Upload 15–20 real photos (fleet, drivers, car interiors, the office/landmark). Geotag if possible.
   - Add Services & Products with the fleet + fares. Turn on messaging.
2. **Reviews engine.** After each trip, send the customer your GBP review link (short link via WhatsApp).
   Aim for a steady trickle (e.g. 3–5/week) with replies to every review. Reviews are the #1 local
   ranking factor *and* AI assistants quote review sentiment/counts.
3. **Local citations / directories** — consistent NAP on: JustDial, Sulekha, IndiaMART, Google Maps,
   Bing Places, Apple Business Connect, Facebook Page, Instagram. AI engines cross-reference these to
   trust the entity.
4. **Bing Places** (separate from Google) — powers Copilot & ChatGPT search results.

---

## TIER 1 — On-site technical SEO (I implement these)

### 1.1 `<head>` fixes (add to `index.html`)
You already have title/description/theme-color/og:title/og:description/og:type. Add:

```html
<link rel="canonical" href="https://REPLACE-DOMAIN.com/" />
<meta property="og:url" content="https://REPLACE-DOMAIN.com/" />
<meta property="og:image" content="https://REPLACE-DOMAIN.com/assets/luxury-glc.jpg" />
<meta property="og:image:alt" content="Mercedes-Benz GLC from the Aditi Cab Service fleet, Ranchi" />
<meta property="og:site_name" content="Aditi Cab Service" />
<meta property="og:locale" content="en_IN" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Aditi Cab Service · Car Rental in Ranchi" />
<meta name="twitter:description" content="Local, outstation, airport, wedding & bus hire across Jharkhand. Book in 60 seconds." />
<meta name="twitter:image" content="https://REPLACE-DOMAIN.com/assets/luxury-glc.jpg" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<meta name="geo.region" content="IN-JH" />
<meta name="geo.placename" content="Dhurwa, Ranchi" />
<meta name="geo.position" content="23.3133;85.2964" />
<meta name="ICBM" content="23.3133, 85.2964" />
```
> Confirm the exact lat/long from your Google Business Profile once created, then I’ll finalize.

### 1.2 Structured data (JSON-LD) — the single most important on-page change
Add this `<script>` before `</body>`. It makes you a machine-readable entity Google & LLMs can cite.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoRental", "LocalBusiness"],
      "@id": "https://REPLACE-DOMAIN.com/#business",
      "name": "Aditi Cab Service",
      "alternateName": "Aditi Car Rental",
      "url": "https://REPLACE-DOMAIN.com/",
      "image": "https://REPLACE-DOMAIN.com/assets/luxury-glc.jpg",
      "logo": "https://REPLACE-DOMAIN.com/assets/logo.png",
      "telephone": "+917979889706",
      "priceRange": "₹11–₹17 per km",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Card",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 2, Dhurwa, near Panchmukhi Mandir",
        "addressLocality": "Ranchi",
        "addressRegion": "Jharkhand",
        "postalCode": "834004",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 23.3133, "longitude": 85.2964 },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00", "closes": "23:59"
      }],
      "areaServed": [
        { "@type": "City", "name": "Ranchi" },
        { "@type": "State", "name": "Jharkhand" },
        { "@type": "City", "name": "Jamshedpur" },
        { "@type": "City", "name": "Deoghar" },
        { "@type": "City", "name": "Bokaro" },
        { "@type": "City", "name": "Hazaribagh" },
        { "@type": "City", "name": "Dhanbad" }
      ],
      "sameAs": [
        "https://www.google.com/maps/REPLACE-WITH-GBP-LINK",
        "https://www.facebook.com/REPLACE",
        "https://www.instagram.com/REPLACE"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fleet & Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local City Rides (8hr/80km & hourly)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outstation Tours (one-way & round trip)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Transfers — Birsa Munda Airport" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding & Event Cars" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate & Monthly Travel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bus, Tempo Traveller & Goods Carrier" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://REPLACE-DOMAIN.com/#website",
      "url": "https://REPLACE-DOMAIN.com/",
      "name": "Aditi Cab Service",
      "publisher": { "@id": "https://REPLACE-DOMAIN.com/#business" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "FAQPage",
      "@id": "https://REPLACE-DOMAIN.com/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What areas does Aditi Cab Service cover?",
          "acceptedAnswer": { "@type": "Answer", "text": "We serve all of Ranchi and across Jharkhand, with outstation trips to Jamshedpur, Deoghar, Bokaro, Hazaribagh, Dhanbad, Patna, Kolkata and neighbouring states." } },
        { "@type": "Question", "name": "How much does a cab cost in Ranchi?",
          "acceptedAnswer": { "@type": "Answer", "text": "Indicative fares start around ₹11–12/km for hatchbacks, ₹12–15/km for sedans and ₹16–17/km for SUVs. Outstation trips are billed on transparent per-km rates. Luxury cars and buses are quoted on request." } },
        { "@type": "Question", "name": "Do you offer airport transfers at Ranchi airport?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide on-time pickup and drop at Birsa Munda Airport, 24×7, with flight tracking and clean, sanitised cars." } },
        { "@type": "Question", "name": "Can I rent a car for a wedding?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer decorated wedding cars and luxury vehicles including a Mercedes-Benz GLC for weddings, receptions and events." } },
        { "@type": "Question", "name": "Do you have buses for group travel?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have 35+ seater buses and tempo travellers for group tours, plus pickups for goods transport." } },
        { "@type": "Question", "name": "How do I book a cab with Aditi Cab Service?",
          "acceptedAnswer": { "@type": "Answer", "text": "Book 24×7 by calling or messaging us on WhatsApp, or fill the booking form on our website and we confirm your ride and fare instantly." } },
        { "@type": "Question", "name": "Where is Aditi Cab Service located?",
          "acceptedAnswer": { "@type": "Answer", "text": "We are based at Sector 2, Dhurwa, Ranchi, Jharkhand — near Panchmukhi Mandir." } }
      ]
    }
  ]
}
</script>
```
> **Do NOT add `aggregateRating`/`review` schema with invented numbers** — Google penalizes fake review
> markup. Once you have real GBP reviews we add a genuine `aggregateRating`.

### 1.3 `robots.txt` (new file at site root) — **explicitly allow AI crawlers**
If these are blocked you cannot be cited in those assistants.

```
User-agent: *
Allow: /

# AI assistants / answer engines — allow so they can read & cite us
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: https://REPLACE-DOMAIN.com/sitemap.xml
```

### 1.4 `sitemap.xml` (new file at site root)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://REPLACE-DOMAIN.com/</loc>
    <lastmod>2026-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```
(Expands as we add dedicated route/service pages — see Tier 2.)

### 1.5 `llms.txt` (new file at site root) — emerging AI convention, cheap win
Plain-markdown fact sheet AI crawlers can grab:
```
# Aditi Cab Service
> 24×7 car rental & travel house in Ranchi, Jharkhand — local rides, outstation tours, airport transfers, weddings, corporate travel and bus/tempo hire.

- Location: Sector 2, Dhurwa, Ranchi, Jharkhand (near Panchmukhi Mandir)
- Phone / WhatsApp: +91 79798 89706
- Hours: Open 24 hours, 7 days a week
- Fleet: Hatchback, Sedan, SUV, Luxury (Mercedes GLC), 35+ seater Bus, Tempo Traveller, Goods pickup
- Indicative fares: Hatchback ₹11–12/km, Sedan ₹12–15/km, SUV ₹16–17/km; Luxury & Bus on request
- Popular routes from Ranchi: Jamshedpur (~130km), Deoghar (~250km), Netarhat (~150km), Patna (~330km), Bokaro (~110km), Hazaribagh (~95km), Dhanbad (~160km)
- Book: call/WhatsApp +91 79798 89706 or the form at https://REPLACE-DOMAIN.com/#booking
```

---

## TIER 2 — Content for humans AND AI (I implement)

AI assistants quote **concise, factual, self-contained** passages. Add:

1. **Visible NAP block in the footer** (real text, not just the map):
   `Aditi Cab Service · Sector 2, Dhurwa, Ranchi, Jharkhand 834004 · Phone/WhatsApp: +91 79798 89706 · Open 24×7`.
   Wrap in `<address>` and link the phone with `tel:+917979889706`.
   (Keep the lead-capture modal as the primary booking CTA — this text is for trust + crawlers.)
2. **Visible FAQ section** on the page using the same Q&As as the FAQ schema above. This is the
   highest-ROI content block for featured snippets and AI answers.
3. **Fares shown as text** (even "starting from" ranges). AI loves extractable pricing; right now fares
   live only in JS-rendered cards.
4. **Route detail content** — short paragraph per popular route (Ranchi→Deoghar, →Jamshedpur, etc.)
   with distance, time, and "what to expect". Later promote the biggest 3–4 to their **own pages/URLs**
   (`/ranchi-to-deoghar-taxi`) — dedicated pages rank far better for "Ranchi to X taxi fare" queries
   than one anchor on a single page. This is your main growth lever after Tier 0/1.
5. **Heading hygiene** — exactly one `<h1>` (your brand/hero is fine); keep section `<h2>`s descriptive
   and keyword-aware ("Car rental fleet in Ranchi", "Outstation taxi routes from Ranchi").

---

## TIER 3 — AI-SEO / GEO specifics (beyond the crawler allowlist)

- **Be mentioned off-site.** AI answers lean on third-party corroboration: GBP, JustDial, Sulekha,
  Facebook, local blogs/news. The more consistent mentions, the more confidently an LLM recommends you.
- **Entity consistency / `sameAs`.** Identical name + NAP across site, GBP, and socials; link them via
  the `sameAs` array in the schema.
- **Answer the question directly, early.** Lead each FAQ answer with the fact (price, yes/no, location)
  in the first sentence — LLMs extract the opening clause.
- **Submit to Bing Webmaster Tools** (ChatGPT search & Copilot use Bing's index) and **Google Search
  Console**. Consider **IndexNow** for instant Bing indexing.
- **Keep content freshness** — update fares/routes periodically; `lastmod` in sitemap reflects it.

---

## Performance / Core Web Vitals (already decent — light touches)

- Hero image is your LCP: add explicit `width`/`height`, serve **WebP/AVIF**, and `fetchpriority="high"`
  (remove any lazy-load on the hero only).
- Keep `loading="lazy"` on below-the-fold fleet/service images (already present).
- Fonts: add `&display=swap` (already on Fraunces) and consider self-hosting Satoshi/Cabinet for speed.
- The grain overlay + marquees are fine; respect `prefers-reduced-motion` (already done).

---

## Measurement (set up once)

1. **Google Search Console** — verify domain, submit sitemap, watch "car rental Ranchi" style queries.
2. **Bing Webmaster Tools** — verify + submit sitemap (feeds AI search).
3. **Google Analytics 4** or privacy-light analytics — track booking-form + WhatsApp clicks as conversions.
4. Monthly: check GBP insights (calls, direction requests, searches).

---

## Site-specific pitfalls to fix

- **Phone/address were hidden** → now being exposed (your decision). Make sure the number in schema,
  `tel:` link, footer, GBP and directories is **byte-for-byte identical**: `+91 79798 89706`.
- **Single-page site with JS-rendered fleet** → fare/car text isn't in the initial HTML. Google renders
  JS but many AI crawlers do NOT. Put key facts (fares, routes, FAQ, NAP) in **static HTML**.
- **No dedicated route/service URLs** → caps how many "Ranchi to X" queries you can win. Plan the top
  3–4 route pages after Tier 1.
- **Don't fake reviews/ratings** in schema — real GBP reviews only.

---

## What I need from you to implement

1. The **live domain URL** (to replace every `https://REPLACE-DOMAIN.com`).
2. Confirm **PIN code** (834004?) and exact address spelling.
3. **GBP map link + social URLs** once created (for `sameAs`) — can be added later.
4. Exact **lat/long** from GBP (I used an approximate Dhurwa coordinate).

## What I'll do once you approve
Implement Tier 1 in full (head tags, JSON-LD, robots.txt, sitemap.xml, llms.txt) + Tier 2 (visible NAP,
FAQ section, text fares) directly in the project, then validate with Google's Rich Results Test and
Schema.org validator.
