import { useState } from "react";
import "./SectionGateway.css";

const T = {
  en: {
    label: "Explore K-Agora",
    headline: "Five Ways\nInto Korea",
    sub: "Each section is a distinct mode. Discussion, experience, and rest — unified under one platform.",
  },
  ko: {
    label: "K-Agora 탐색",
    headline: "한국으로 향하는\n다섯 개의 문",
    sub: "각 섹션은 고유한 모드입니다. 토론, 경험, 휴식 — 하나의 플랫폼으로 통합.",
  },
};

const SECTIONS = [
  {
    id: "g2k",
    code: "G2K",
    color: "#2A6B8A",
    colorBg: "rgba(42,107,138,0.12)",
    icon: "→🇰🇷",
    en: {
      title: "Global to Korean",
      sub: "Ask Koreans",
      desc: "Foreign users ask actual Koreans about Korea. History, politics, society, culture, everyday life — answered with lived context, not Wikipedia.",
      cta: "Ask a question",
      tags: ["#culture", "#history", "#society"],
    },
    ko: {
      title: "글로벌 → 한국",
      sub: "한국인에게 물어보세요",
      desc: "외국인이 실제 한국인에게 한국에 대해 묻습니다. 역사, 정치, 사회, 문화 — 위키피디아가 아닌 생생한 경험으로 답합니다.",
      cta: "질문하기",
      tags: ["#문화", "#역사", "#사회"],
    },
  },
  {
    id: "k2g",
    code: "K2G",
    color: "#C8392D",
    colorBg: "rgba(200,57,45,0.12)",
    icon: "🇰🇷→",
    en: {
      title: "Korean to Global",
      sub: "Koreans Explain",
      desc: "Korean contributors proactively share their perspective — structured explanations, editorial threads, and cultural deep-dives written from the inside.",
      cta: "Read explanations",
      tags: ["#perspective", "#insight", "#authentic"],
    },
    ko: {
      title: "한국 → 글로벌",
      sub: "한국인이 설명합니다",
      desc: "한국인 기여자들이 자신의 시각을 능동적으로 공유합니다 — 내부자 시각으로 작성된 구조화된 설명과 에디토리얼 스레드.",
      cta: "설명 읽기",
      tags: ["#관점", "#인사이트", "#진정성"],
    },
  },
  {
    id: "among-g",
    code: "Among G",
    color: "#5B7FA6",
    colorBg: "rgba(91,127,166,0.12)",
    icon: "🌏",
    en: {
      title: "Among G",
      sub: "Foreigners Discuss",
      desc: "Foreign users discuss Korea among themselves — compare perspectives from different countries, debate interpretations, and share what they've learned.",
      cta: "Join discussion",
      tags: ["#debate", "#comparison", "#global"],
    },
    ko: {
      title: "어몽 G",
      sub: "외국인들의 토론",
      desc: "외국인들이 서로 한국에 대해 이야기합니다 — 다른 나라의 관점을 비교하고, 해석을 토론하며, 배운 것을 나눕니다.",
      cta: "토론 참여",
      tags: ["#토론", "#비교", "#글로벌"],
    },
  },
  {
    id: "gada",
    code: "GaDa",
    color: "#B8660B",
    colorBg: "rgba(184,102,11,0.12)",
    icon: "🗺",
    en: {
      title: "GaDa — 가다",
      sub: "Experience Korea",
      desc: "같이 · 가치 · 다시 — Together, Value, Again. Narrative-based cultural programs. Thematic experiences. Story-driven routes. Real places, verified curation.",
      cta: "Browse programs",
      tags: ["#experience", "#culture", "#stories"],
    },
    ko: {
      title: "가다",
      sub: "한국을 경험하세요",
      desc: "같이 · 가치 · 다시. 내러티브 기반 문화 프로그램. 테마 경험. 이야기 중심 루트. 진짜 장소, 검증된 큐레이션.",
      cta: "프로그램 보기",
      tags: ["#체험", "#문화", "#이야기"],
    },
  },
  {
    id: "shim",
    code: "SHIM",
    color: "#3A7A5C",
    colorBg: "rgba(58,122,92,0.12)",
    icon: "🌿",
    en: {
      title: "SHIM — 쉼",
      sub: "Rest in Korea",
      desc: "Four curated rest destinations per month. Forest, sea, city, hidden calm. Editorial selection — not a listing. Trust over volume.",
      cta: "This month's picks",
      tags: ["#rest", "#healing", "#hidden"],
    },
    ko: {
      title: "쉼",
      sub: "한국에서 쉬세요",
      desc: "월 4개의 엄선된 휴식 장소. 숲, 바다, 도시, 숨겨진 고요함. 목록이 아닌 에디토리얼 선정 — 양보다 신뢰.",
      cta: "이달의 추천",
      tags: ["#휴식", "#힐링", "#숨겨진"],
    },
  },
];

export default function SectionGateway({ lang }) {
  const [active, setActive] = useState(0);
  const t = T[lang];
  const sec = SECTIONS[active];
  const sd = sec[lang];

  return (
    <section className="gateway" id="sections">
      <div className="container">
        {/* Header */}
        <div className="gateway__header">
          <span className="section-label">{t.label}</span>
          <h2 className="gateway__headline">
            {t.headline.split("\n").map((l, i) => (
              <span key={i}>{l}<br /></span>
            ))}
          </h2>
          <p className="gateway__sub">{t.sub}</p>
        </div>

        {/* Tab navigation */}
        <div className="gateway__tabs" role="tablist">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              className={`gateway__tab ${i === active ? "gateway__tab--active" : ""}`}
              style={{ "--tab-color": s.color }}
              onClick={() => setActive(i)}
            >
              <span className="gateway__tab-icon">{s.icon}</span>
              <span className="gateway__tab-code">{s.code}</span>
            </button>
          ))}
        </div>

        {/* Section detail panel */}
        <div
          className="gateway__panel"
          key={sec.id}
          style={{ "--panel-color": sec.color, "--panel-bg": sec.colorBg }}
        >
          <div className="gateway__panel-left">
            <div className="gateway__panel-tag">
              <span className="gateway__panel-icon">{sec.icon}</span>
              <span>{sec.code}</span>
            </div>
            <h3 className="gateway__panel-title">{sd.title}</h3>
            <p className="gateway__panel-sub">{sd.sub}</p>
            <p className="gateway__panel-desc">{sd.desc}</p>
            <div className="gateway__panel-tags">
              {sd.tags.map(tag => (
                <span key={tag} className="gateway__panel-tagchip">{tag}</span>
              ))}
            </div>
            <a href={`#${sec.id}`} className="gateway__panel-cta">
              {sd.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="gateway__panel-right">
            <div className="gateway__panel-visual">
              <div className="gateway__panel-glow" />
              <span className="gateway__panel-big-icon">{sec.icon}</span>
              <span className="gateway__panel-big-code">{sec.code}</span>
            </div>
            {/* Small nav to adjacent sections */}
            <div className="gateway__panel-nav">
              {active > 0 && (
                <button className="gateway__panel-nav-btn" onClick={() => setActive(active - 1)}>
                  ← {SECTIONS[active - 1].code}
                </button>
              )}
              {active < SECTIONS.length - 1 && (
                <button className="gateway__panel-nav-btn gateway__panel-nav-btn--right" onClick={() => setActive(active + 1)}>
                  {SECTIONS[active + 1].code} →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="gateway__dots">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              className={`gateway__dot ${i === active ? "gateway__dot--active" : ""}`}
              style={{ "--dot-color": s.color }}
              onClick={() => setActive(i)}
              aria-label={s.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
