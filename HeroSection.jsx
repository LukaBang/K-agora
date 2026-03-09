import "./HeroSection.css";

const T = {
  en: {
    eyebrow: "The Korea Platform",
    headline1: "Real Korea.",
    headline2: "Real Answers.",
    headline3: "Real People.",
    sub: "Not AI summaries. Not travel brochures.\nActual Koreans explain Korea — culture, society, history, and everyday life.",
    cta1: "Start Exploring",
    cta2: "I'm Korean →",
    cta2sub: "Contribute your perspective",
    stat1n: "Real Koreans",
    stat1l: "contributors",
    stat2n: "5",
    stat2l: "sections",
    stat3n: "Global",
    stat3l: "community",
    scroll: "Explore sections",
  },
  ko: {
    eyebrow: "한국 플랫폼",
    headline1: "진짜 한국.",
    headline2: "진짜 답변.",
    headline3: "진짜 사람들.",
    sub: "AI 요약도 아닙니다. 여행 안내서도 아닙니다.\n실제 한국인들이 한국을 설명합니다 — 문화, 사회, 역사, 그리고 일상.",
    cta1: "탐색 시작",
    cta2: "한국인이신가요? →",
    cta2sub: "당신의 시각을 기여하세요",
    stat1n: "실제 한국인",
    stat1l: "기여자",
    stat2n: "5",
    stat2l: "섹션",
    stat3n: "글로벌",
    stat3l: "커뮤니티",
    scroll: "섹션 탐색",
  },
};

// Decorative Korean characters
const DECO_CHARS = ["韓", "國", "文", "化", "話", "禮", "人"];

export default function HeroSection({ lang }) {
  const t = T[lang];

  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__bg-grid" />
        <div className="hero__bg-glow hero__bg-glow--red" />
        <div className="hero__bg-glow hero__bg-glow--blue" />
        {/* Decorative hanja float */}
        {DECO_CHARS.map((ch, i) => (
          <span key={i} className={`hero__deco-char hero__deco-char--${i}`}>{ch}</span>
        ))}
      </div>

      <div className="container hero__container">
        {/* Left: Content */}
        <div className="hero__content">
          <div className="hero__eyebrow fade-up">
            <span className="hero__eyebrow-dot" />
            {t.eyebrow}
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-line fade-up-1">{t.headline1}</span>
            <span className="hero__headline-line hero__headline-line--accent fade-up-2">{t.headline2}</span>
            <span className="hero__headline-line fade-up-3">{t.headline3}</span>
          </h1>

          <p className="hero__sub fade-up-4">
            {t.sub.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>

          <div className="hero__ctas fade-up-4">
            <a href="#sections" className="hero__cta-primary">
              {t.cta1}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="hero__cta-korean">
              <a href="#korean-contributor" className="hero__cta-secondary">{t.cta2}</a>
              <span className="hero__cta-secondary-sub">{t.cta2sub}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="hero__stats fade-up-4">
            <div className="hero__stat">
              <span className="hero__stat-n">🇰🇷</span>
              <span className="hero__stat-l">{t.stat1n}<br/>{t.stat1l}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-n">{t.stat2n}</span>
              <span className="hero__stat-l">{t.stat2l}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-n">🌏</span>
              <span className="hero__stat-l">{t.stat3n}<br/>{t.stat3l}</span>
            </div>
          </div>
        </div>

        {/* Right: Visual card cluster */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <span className="hero__card-tag g2k-tag">G2K</span>
              <span className="hero__card-time">2m ago</span>
            </div>
            <p className="hero__card-q">
              {lang === "en"
                ? "Why do Koreans take off shoes at home?"
                : "왜 한국인들은 집에서 신발을 벗나요?"}
            </p>
            <div className="hero__card-answer">
              <span className="hero__card-badge">🇰🇷 Korean Ambassador</span>
              <p>{lang === "en"
                ? "It's deeply rooted in Confucian cleanliness culture — the floor is where we eat, sleep, and live..."
                : "유교의 청결 문화에 깊이 뿌리를 두고 있습니다 — 바닥은 먹고, 자고, 생활하는 공간입니다..."}
              </p>
            </div>
            <div className="hero__card-reactions">
              <span>▲ 342</span>
              <span>💬 28</span>
              <span className="hero__card-verified">✓ {lang === "en" ? "Korean" : "한국인"}</span>
            </div>
          </div>

          <div className="hero__card hero__card--side">
            <span className="hero__card-tag shim-tag">SHIM</span>
            <p className="hero__card-place">
              {lang === "en" ? "🌲 This Month: Forest Healing Stay" : "🌲 이달의 숲 힐링 스테이"}
            </p>
            <p className="hero__card-place-sub">
              {lang === "en" ? "Gangwon-do · Hidden spot" : "강원도 · 숨겨진 명소"}
            </p>
          </div>

          <div className="hero__card hero__card--mini">
            <span className="hero__card-tag event-tag">
              {lang === "en" ? "🏅 Event LIVE" : "🏅 이벤트 진행중"}
            </span>
            <p className="hero__card-mini-title">
              {lang === "en" ? "이달의 대한외국민" : "이달의 대한외국민"}
            </p>
          </div>

          {/* Floating orb */}
          <div className="hero__orb" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">{t.scroll}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
