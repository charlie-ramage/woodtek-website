# Woodtek Website (woodtek.co.nz)

## Brief
Build a new full website for **Woodtek** — a NZ mass timber installation specialist run by Jeremy Stulen out of Tauranga. The existing site (woodtek.co.nz, WordPress on Elementor) is functional but undersells him. Blake wants a stronger pitch site that positions Jeremy as NZ's go-to specialist installer for mass timber.

## Client / Owner
- **Jeremy Stulen** — sole operator (one-man builder / crew lead)
- **Email:** jeremy@woodtek.co.nz
- **Phone:** 022 673 3290
- **Address:** 39 Whakakake Street, Tauriko, Tauranga 3116
- **Service area:** All of NZ (commercial mass timber); Te Puke/Tauranga area for residential
- **Instagram:** @woodteknz — primary platform for posting work
- **YouTube channel:** UCclBu7Dd3kbpZ7UilFeoxJw (Woodtek NZ)

## The two-site strategy
Jeremy bought a second domain `woodtekresidential.co.nz` because Woodtek is perceived as a premium commercial outfit and residential enquiries don't come through. **This project = woodtek.co.nz only** (commercial mass timber). Residential one-pager is Phase 2.

## Positioning
**The independent specialist installer.**

Competitors in NZ:
- McLeod Cranes (Tauranga) — bundles cranes + install
- Pinnacle Resources — crew + equipment
- Kobe Construction — broader builder doing mass timber
- XLam, Red Stag TimberLab — manufacturers (also Woodtek suppliers, not direct competitors)

Woodtek's wedge:
1. **Manufacturer-agnostic** — works with whichever CLT supplier suits the project (Red Stag TimberLab, XLam, etc.)
2. **International experience** — Jeremy's crew brings overseas mass timber know-how to NZ
3. **Specialist focus** — they don't build the whole house, they're the crew main contractors hire to land panels safely and fast
4. **Full QA documentation** — photo QA reports for main contractors
5. **All the cert boxes ticked** — Working at Heights, NZQA Rigging/Dogman, Site Safe, First Aid, EWP, fire extinguishers in every vehicle

## Audiences
1. **Main contractors** planning a commercial mass timber project — need to trust the installer
2. **Architects / structural engineers** designing in CLT — want a specialist they can recommend
3. **Developers** weighing concrete vs timber — need to see the case for timber

## Brand
- **Logo:** assets/logo/woodtek-logo-colour.png (wordmark: "wood" cream + "tek" orange + "construction" white, sits on dark navy bg)
- **Primary brand colour:** deep navy (sample from logo bg — ~`#0a2542` / `#0b2640`)
- **Accent:** construction orange (~`#e89322` / `#d97706`)
- **Warm timber accents** for backgrounds/sections — light cream/oak tones
- **Tone:** confident, technical, grounded — not corporate-stiff, not blokey. Premium specialist.

## Key content to use (existing + reframed)

### Hero
- Headline option: **"New Zealand's mass timber installation specialists."**
- Sub: "Cross-laminated timber, glulam, and hybrid structures — installed faster, with less embodied carbon, by Aotearoa's most experienced specialist crew."
- CTAs: "See our work" / "Talk to Jeremy"
- Background: hero image of CLT panel being landed (use one of the IG photos — `ig-13-CrsTNp5u5I8.jpg` (CLT subfloor) or first IG photo) OR autoplay-muted-loop the YouTube video as the hero background.

### Why mass timber (stats / facts)
- Up to **75% lower embodied carbon** vs concrete/steel equivalents
- **Lighter structures** — reduced foundation requirements, lower transport cost
- **Faster on site** — pre-fabricated, lands like Lego (hours, not days, per floor)
- **Stores carbon** for the life of the building
- **Fire-rated** — chars on the outside, protects the structure inside (exceeds code)
- **Beautiful exposed finishes** — warmth, occupant wellbeing, biophilic design

### Services (the 4-step process — already on existing site)
1. **Procurement** — Constructability review, panel selection, supplier coordination, shop drawing
2. **Manufacture** — Working with Red Stag TimberLab / XLam: laminating, CNC, QA, sequence packing
3. **Delivery** — Cartage planning, crane scheduling, lift plans
4. **Installation** — Specialist crew lands, fixes, screws per engineered design; full photo QA pack delivered to main contractor

### What we install
- CLT (cross-laminated timber) — floors, walls, lift shafts, roofs
- Glulam beams & columns
- Hybrid structures (timber + steel / timber + concrete)
- LVL framing

### Suppliers / Partners
- **Red Stag TimberLab** (Rotorua) — primary NZ CLT manufacturer (logo to include)
- **Spax Pacific** — fasteners specialist (logo: `assets/logo/spax-rgb.svg`)
- Add Mention of XLam as supplier-neutral capability

### Safety & QA credentials (trust block)
- Working at Heights certificates
- Elevated Work Platform (EWP) certificates
- NZQA Rigging / Dogman certificates
- Site Safe passports
- First Aid certificates
- First aid kit + fire extinguisher in every vehicle
- Full photo-documented QA reports

### Recent work — Instagram-fed gallery
- 16-tile grid pulling from posts.json (`assets/instagram/posts.json` + images in `assets/instagram/files/`)
- Each tile links to the IG post
- "Follow @woodteknz" CTA

### Case study links (external — already in current content)
- Waipawa Substation: https://redstagtimberlab.co.nz/waipawa-substation-case-study/
- Korora Road: https://redstagtimberlab.co.nz/korora-road-project-case-study/
- midrisewood.co.nz (educational resource)

### FAQs (use existing 7 from current site — verbatim or lightly cleaned up)
1. What is Cross Laminated Timber?
2. What distance can CLT span between structural elements?
3. How does Mass Timber achieve code regulations for fire resistance?
4. What does Woodtek's installation include?
5. How long will it take to install?
6. How does it compare environmentally against concrete/steel structures?
7. What fixings hold the timber elements together?

### Testimonial
> "The CLT midfloor made ease of our services install by only using tek screws and no predrilling or concrete dust. We completed the install in less time than we estimated."
> — Craig, Services Technician

### Contact block
- Big phone number, email, address
- Simple form (mailto: for prototype, or just contact details — no backend yet)

### Footer
- Logo, address, phone, email
- Social: Instagram (@woodteknz), YouTube, Facebook, Google
- Copyright

## YouTube video
- Embed video ID: **`KSKxgGtZYIg`** (Woodtek NZ channel intro video — conveys what Jeremy is about)
- Use privacy-enhanced embed: `https://www.youtube-nocookie.com/embed/KSKxgGtZYIg`
- Treat as a hero / "story" moment — click-to-play lightbox or large featured video card with a custom poster (`assets/video/video-overlay.jpg` or `assets/video/youtube-thumb.jpg`)

## Instagram feed
- Static data at `assets/instagram/posts.json` (20 posts, with captions + post URLs + local image paths)
- Local image files in `assets/instagram/files/` (1.4MB total, mix of .webp + .jpg)
- For Phase 1: render as a static grid that links to each IG post. Document the long-term update path: **Behold.so free tier** (free for 1 feed, up to 15 posts, official Instagram Basic Display API) — Blake can hook this up later with Jeremy's IG account.

## Stack
- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** v4
- **Framer Motion** for subtle scroll/hover animations (don't go overboard)
- **lucide-react** for icons
- **next/image** for all images (the IG images live in `public/ig/`)
- **next/font** — pair: Manrope for display + Inter for body (or Geist sans variable). NZ/British spelling throughout.
- **No backend** — static site, deploy on Vercel
- Contact form = mailto: link for now

## Deploy
- Vercel project name: `woodtek-website`
- GitHub repo: `charlie-ramage/woodtek-website` (under Charlie's GH org)
- Match the pattern from easyclaim-prototype: push to main → auto-deploy

## Non-goals
- No CMS — content lives in code/data files
- No e-commerce
- No multilingual
- No quote calculator
- No login/account system

## Success criteria
- Renders beautifully on mobile + desktop (tested both)
- Logo + colour palette feel premium
- YouTube video plays in lightbox cleanly
- Instagram grid feels alive (not slideshow-cheap)
- Position Jeremy as the specialist, not the cheapest
- Clear path from "I'm a main contractor with a CLT project" → "I should call Jeremy"
- Vercel preview URL deployed for Blake to share back to Jeremy
