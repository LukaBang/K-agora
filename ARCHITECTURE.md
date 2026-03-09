# K-Agora — Page Architecture
## Route Structure & Component Map

---

## Route Map

```
/                   ← index.html  (premium hub — this file)
/g2k                ← G2K page    (full Q&A section)
/k2g                ← K2G page    (short explainer feed)
/among-g            ← Among G     (foreigner discussion)
/gada               ← GaDa        (cultural experience routes)
/shim               ← SHIM        (editorial rest curation)
/about              ← About       (platform philosophy, ranks)
```

---

## What Lives on the Index Page (Hub)

| Element | Description |
|---|---|
| Left stage | Full-screen immersive preview per focused section |
| Right stack | 3D rotating card stack — 6 sections auto-rotate every 6s |
| Hero state | Shown before any section is activated |
| CTA buttons | Max 2 per section. Routes directly to section page |
| Section description | 1-line only. Never full feature preview |
| Bottom meta strip | 3 permanent stats (Korean contributors / 5 sections / Global) |

**What does NOT live on the index page:**
- Full G2K feed, questions, answers, comments
- Full K2G video feed, subscribe flow, moderation
- Full Among G threads
- Full GaDa route browse or booking
- Full SHIM editorial grid
- Auth/sign-in flows

---

## Left Gallery — CTA Map

| Section | CTA Primary | CTA Secondary |
|---|---|---|
| G2K | Start Exploring → `/g2k` | I'm Korean → `/about` |
| K2G | Enter K2G → `/k2g` | — |
| Among G | Enter Among G → `/among-g` | — |
| GaDa | This Week's Route → `/gada` | Enter GaDa → `/gada` |
| SHIM | This Month's Theme → `/shim` | Enter SHIM → `/shim` |
| About | Read About K-Agora → `/about` | I'm Korean → `/about#korean` |

---

## Next.js Component Structure (Recommended)

```
app/
├── layout.tsx                  ← shared shell: nav, auth context, theme
├── page.tsx                    ← / → renders HubPage
│
├── g2k/
│   └── page.tsx                ← full G2K page
├── k2g/
│   └── page.tsx                ← full K2G page
├── among-g/
│   └── page.tsx                ← full Among G page
├── gada/
│   └── page.tsx                ← full GaDa page
├── shim/
│   └── page.tsx                ← full SHIM page
├── about/
│   └── page.tsx                ← About page
│
components/
├── shell/
│   ├── Navbar.tsx              ← shared across all pages
│   └── AuthProvider.tsx        ← Better Auth session context
│
├── hub/                        ← index page only
│   ├── HubPage.tsx             ← grid layout wrapper
│   ├── Stage.tsx               ← left immersive gallery
│   ├── StageHero.tsx           ← default hero (pre-selection)
│   ├── SectionPreview.tsx      ← per-section preview content
│   ├── StackPanel.tsx          ← right 3D card stack container
│   ├── SectionCard.tsx         ← individual stack card
│   ├── TimerArc.tsx            ← SVG circular progress
│   └── StackDots.tsx           ← dot indicators
│
├── g2k/                        ← G2K section components
│   ├── G2KFeed.tsx
│   ├── PostCard.tsx
│   ├── PostModal.tsx
│   ├── CategoryPills.tsx
│   └── AnswerThread.tsx
│
├── k2g/                        ← K2G section components
│   ├── K2GFeed.tsx
│   ├── ShortCard.tsx
│   ├── ShortModal.tsx
│   └── CreatorFollow.tsx
│
├── among-g/
│   ├── ThreadList.tsx
│   └── DiscussionCard.tsx
│
├── gada/
│   ├── RouteCard.tsx
│   └── ProgramList.tsx
│
└── shim/
    ├── EditorialGrid.tsx
    └── RestCard.tsx
```

---

## Animation Stack (Recommended)

| Layer | Library | Usage |
|---|---|---|
| Stack card transitions | Framer Motion `layoutId` + `AnimatePresence` | Card slot rotation |
| Left gallery crossfade | Framer Motion `AnimatePresence` mode="wait" | Content swap |
| Background wash | CSS `transition: background 1.2s` | Colour bleed per section |
| Timer arc | CSS `@keyframes` stroke-dashoffset | Countdown ring |
| Scan line | CSS `transform: scaleX()` | Section entry effect |
| Hover pause | Framer Motion `useAnimation` | Pause/resume on hover |

---

## Section Independence Rules

Each section page (`/g2k`, `/k2g`, etc.) must:
- Have its own layout optimised for that section's UX
- Not assume any state from the hub page
- Load independently via direct URL
- Share only: Navbar, AuthProvider, global CSS variables

The index page:
- Does not import or render any section's functional components
- Only imports `SectionCard` and `SectionPreview` (hub-specific lightweight components)
- Has zero dependency on G2K/K2G/GaDa/SHIM/Among G business logic

---

## Section Routing on Index

Stack card click → `router.push(section.href)`
Left stage CTA click → `router.push(section.href)`
Keyboard Enter → `router.push(active section href)`
Nav link → standard Next.js `<Link>`

There is no SPA-style section expansion on the index page.
Every section entry is a full page navigation.
