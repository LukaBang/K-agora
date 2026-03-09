import { useState, useEffect } from "react";
import "./EventBanner.css";

const T = {
  en: {
    label: "Live Event",
    title: "이달의 대한외국민",
    subtitle: "This Month's Honorary Korean",
    desc: "Who knows Korea best? Compete through quizzes, debates, and cultural challenges. Top performers advance to the Speed Run finals — and a shot at the season championship.",
    cta: "Enter Competition",
    ctaSub: "Citizen rank or above required",
    howLabel: "How it works",
    steps: [
      { icon: "📝", en: "Monthly Quiz & Debate", ko: "월간 퀴즈 & 토론" },
      { icon: "⚡", en: "Speed Run Finals", ko: "스피드런 본선" },
      { icon: "🏆", en: "Season Tournament", ko: "시즌 토너먼트" },
      { icon: "🏅", en: "Honorary Korean", ko: "명예한국인" },
    ],
    prize: "Top 3 this month advance to Speed Run",
    timeLabel: "Days remaining",
    days: "18",
    rankLabel: "Current top",
    ranks: [
      { flag: "🇺🇸", name: "KoreaFan_NY", score: "2,840" },
      { flag: "🇯🇵", name: "HanGul_Taro", score: "2,610" },
      { flag: "🇧🇷", name: "SeoulWatcher", score: "2,390" },
    ],
  },
  ko: {
    label: "라이브 이벤트",
    title: "이달의 대한외국민",
    subtitle: "이달의 명예한국인",
    desc: "한국을 가장 잘 아는 사람은 누구일까요? 퀴즈, 토론, 문화 챌린지로 경쟁하세요. 상위 참가자는 스피드런 본선에 진출하고 — 시즌 챔피언십을 노릴 수 있습니다.",
    cta: "대회 참가",
    ctaSub: "Citizen 등급 이상 필요",
    howLabel: "진행 방식",
    steps: [
      { icon: "📝", en: "Monthly Quiz & Debate", ko: "월간 퀴즈 & 토론" },
      { icon: "⚡", en: "Speed Run Finals", ko: "스피드런 본선" },
      { icon: "🏆", en: "Season Tournament", ko: "시즌 토너먼트" },
      { icon: "🏅", en: "Honorary Korean", ko: "명예한국인" },
    ],
    prize: "이달 상위 3명이 스피드런에 진출",
    timeLabel: "남은 일수",
    days: "18",
    rankLabel: "현재 상위",
    ranks: [
      { flag: "🇺🇸", name: "KoreaFan_NY", score: "2,840" },
      { flag: "🇯🇵", name: "HanGul_Taro", score: "2,610" },
      { flag: "🇧🇷", name: "SeoulWatcher", score: "2,390" },
    ],
  },
};

export default function EventBanner({ lang }) {
  const [pulse, setPulse] = useState(true);
  const t = T[lang];

  // Live dot pulse
  useEffect(() => {
    const id = setInterval(() => setPulse(p => !p), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="event-banner" id="event">
      <div className="event-banner__bg">
        <div className="event-banner__bg-stripe" />
        <div className="event-banner__bg-glow" />
      </div>

      <div className="container event-banner__inner">
        {/* Left: Event info */}
        <div className="event-banner__left">
          <div className="event-banner__live-tag">
            <span className={`event-banner__live-dot ${pulse ? "pulse" : ""}`} />
            {t.label}
          </div>

          <h2 className="event-banner__title">{t.title}</h2>
          <p className="event-banner__subtitle">{t.subtitle}</p>
          <p className="event-banner__desc">{t.desc}</p>

          {/* Steps */}
          <div className="event-banner__steps">
            {t.steps.map((step, i) => (
              <div key={i} className="event-banner__step">
                <span className="event-banner__step-icon">{step.icon}</span>
                <span className="event-banner__step-label">{lang === "en" ? step.en : step.ko}</span>
                {i < t.steps.length - 1 && <span className="event-banner__step-arrow">→</span>}
              </div>
            ))}
          </div>

          <p className="event-banner__prize">🎯 {t.prize}</p>

          <div className="event-banner__ctas">
            <a href="#event-enter" className="event-banner__cta">
              {t.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className="event-banner__cta-sub">{t.ctaSub}</span>
          </div>
        </div>

        {/* Right: Leaderboard + timer */}
        <div className="event-banner__right">
          <div className="event-banner__timer">
            <span className="event-banner__timer-n">{t.days}</span>
            <span className="event-banner__timer-l">{t.timeLabel}</span>
          </div>

          <div className="event-banner__leaderboard">
            <span className="event-banner__lb-label">{t.rankLabel}</span>
            {t.ranks.map((r, i) => (
              <div key={i} className="event-banner__lb-row">
                <span className="event-banner__lb-rank">{["🥇","🥈","🥉"][i]}</span>
                <span className="event-banner__lb-flag">{r.flag}</span>
                <span className="event-banner__lb-name">{r.name}</span>
                <span className="event-banner__lb-score">{r.score}</span>
              </div>
            ))}
          </div>

          {/* Decorative medal */}
          <div className="event-banner__medal" aria-hidden="true">🏅</div>
        </div>
      </div>
    </section>
  );
}
