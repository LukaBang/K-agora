# K-Agora — Main Page

> Real Korea. Real People.

K-Agora 메인페이지 프론트엔드 구현체입니다.

---

## 📁 Structure / 구조

```
k-agora/
├── index.html                    ← Standalone HTML (no build needed / 빌드 불필요)
├── README.md
└── src/                          ← React component source / React 컴포넌트 소스
    ├── App.jsx
    ├── styles/
    │   └── globals.css
    └── components/
        ├── Navbar.jsx / .css
        ├── HeroSection.jsx / .css
        ├── SectionGateway.jsx / .css
        ├── EventBanner.jsx / .css
        ├── RankSystem.jsx / .css
        └── Footer.jsx / .css
```

---

## 🚀 Usage / 사용법

### Option A: Standalone HTML (fastest / 가장 빠름)
Open `index.html` directly in browser. No build step required.
`index.html`을 브라우저에서 직접 열기. 빌드 불필요.

### Option B: React (Vite recommended / Vite 권장)
```bash
npm create vite@latest kagora-frontend -- --template react
# Copy src/ contents into the new project
# src/ 내용을 새 프로젝트에 복사
npm install
npm run dev
```

---

## 🎨 Design System / 디자인 시스템

| Token | Value | Use |
|-------|-------|-----|
| `--vermillion` | `#C8392D` | Brand primary / 브랜드 주색 (단청 빨강) |
| `--celadon` | `#5B9E8A` | Secondary accent / 보조 액센트 (청자색) |
| `--gold` | `#B8860B` | Event / gamification / 이벤트·게임화 |
| `--ink` | `#0D1117` | Background / 배경 |
| `--paper` | `#F7F4EE` | Text / 텍스트 |
| `--g2k` | `#2A6B8A` | G2K section color |
| `--k2g` | `#C8392D` | K2G section color |
| `--amg` | `#5B7FA6` | Among G section color |
| `--gada` | `#B8660B` | GaDa section color |
| `--shim` | `#3A7A5C` | SHIM section color |

Fonts: `DM Serif Display` (display/hero) + `Noto Serif KR` (Korean body) + `DM Sans` (UI)

---

## 🌐 i18n

Language toggle (EN ↔ 한) built into Navbar.
All text content defined in bilingual `T = { en: {...}, ko: {...} }` objects per component.
언어 토글이 내비바에 내장됨. 모든 텍스트는 컴포넌트별 `T = { en, ko }` 객체로 정의.

---

## 📐 Page Sections / 페이지 섹션

| Section | Component | Description |
|---------|-----------|-------------|
| Navbar | `Navbar.jsx` | Fixed header, section links, lang toggle, auth CTAs |
| Hero | `HeroSection.jsx` | Platform intro, headline, live card cluster |
| Section Gateway | `SectionGateway.jsx` | 5-section tab explorer (G2K/K2G/Among G/GaDa/SHIM) |
| Event Banner | `EventBanner.jsx` | 이달의 대한외국민 live event + leaderboard |
| Rank System | `RankSystem.jsx` | Newbie → Citizen → Korean Ambassador → Honorary Korean |
| Footer | `Footer.jsx` | Links, lang switcher, tagline |

---

## 🗓 Next / 다음 단계

- [ ] G2K question feed page
- [ ] K2G contributor thread page
- [ ] Among G discussion board
- [ ] GaDa program listing + detail
- [ ] SHIM monthly feature page
- [ ] Auth flow (Naver/Kakao/Toss/PASS + Google/Apple)
- [ ] User profile + rank badge display

---

## ⚙️ Tech Stack (Full Platform)

See `K-Agora_Platform_Blueprint_v1.docx` for complete architecture.

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14 + Tailwind + shadcn/ui |
| Backend | NestJS (TypeScript) |
| DB | PostgreSQL + Redis |
| Search | Meilisearch |
| Auth | Better Auth (Naver/Kakao/Toss/PASS/Google/Apple) |
| Storage | MinIO → AWS S3 |
| Deploy | Docker Compose (NAS/PC) → Cloud-ready |
