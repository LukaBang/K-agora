import "./RankSystem.css";

const T = {
  en: {
    label: "Rank System",
    headline: "Your Place in\nthe Community",
    sub: "Earn trust. Gain recognition. Become Korea's ambassador to the world — or an Honorary Korean.",
    ranks: [
      {
        id: "newbie",
        badge: "◎",
        name: "Newbie",
        color: "#666E80",
        conditions: ["No verification required", "Can post questions and comments", "Can participate in discussions", "No nationality display"],
        en_desc: "Everyone starts here. No barriers.",
        ko_desc: "모두 여기서 시작합니다. 장벽 없음.",
      },
      {
        id: "citizen",
        badge: "●",
        name: "Citizen",
        color: "#5B9E8A",
        flag: true,
        conditions: ["Identity verification complete", "Nationality flag displayed", "Full discussion access", "Event participation eligible"],
        en_desc: "Verified member of the K-Agora community.",
        ko_desc: "K-Agora 커뮤니티의 인증된 멤버.",
      },
      {
        id: "ambassador",
        badge: "🇰🇷",
        name: "Korean Ambassador",
        nameKo: "민간대사",
        color: "#C8392D",
        korean: true,
        conditions: ["Korean social auth (Naver/Kakao/Toss/PASS)", "Consistent quality answers", "Community upvotes", "Contribution score threshold"],
        en_desc: "Verified Korean contributor. The authentic voice of Korea on this platform.",
        ko_desc: "인증된 한국인 기여자. 이 플랫폼에서 한국의 진짜 목소리.",
      },
      {
        id: "honorary",
        badge: "🏅",
        name: "Honorary Korean",
        nameKo: "명예한국인",
        color: "#B8860B",
        conditions: ["Deep Korea knowledge", "High discussion contribution", "Competition performance", "Community evaluation", "Moderator + algorithm review"],
        en_desc: "The highest honor for a foreign member. Awarded to those who truly understand Korea.",
        ko_desc: "외국인 멤버의 최고 영예. 한국을 진정으로 이해하는 사람에게 수여.",
      },
    ],
    koreanPath: "Korean Path",
    foreignPath: "Global Path",
    koreanPathSub: "For Korean nationals",
    foreignPathSub: "For global members",
  },
  ko: {
    label: "등급 시스템",
    headline: "커뮤니티 안에서\n당신의 자리",
    sub: "신뢰를 쌓으세요. 인정을 받으세요. 세계를 향한 한국의 민간대사가 되거나 — 명예한국인이 되세요.",
    ranks: [
      {
        id: "newbie",
        badge: "◎",
        name: "Newbie",
        color: "#666E80",
        conditions: ["인증 불필요", "질문 및 댓글 게시 가능", "토론 참여 가능", "국적 표시 없음"],
        en_desc: "Everyone starts here. No barriers.",
        ko_desc: "모두 여기서 시작합니다. 장벽 없음.",
      },
      {
        id: "citizen",
        badge: "●",
        name: "Citizen",
        color: "#5B9E8A",
        flag: true,
        conditions: ["신원 인증 완료", "국기 국적 표시", "전체 토론 접근", "이벤트 참가 자격"],
        en_desc: "Verified member of the K-Agora community.",
        ko_desc: "K-Agora 커뮤니티의 인증된 멤버.",
      },
      {
        id: "ambassador",
        badge: "🇰🇷",
        name: "Korean Ambassador",
        nameKo: "민간대사",
        color: "#C8392D",
        korean: true,
        conditions: ["한국 소셜 인증 (네이버/카카오/토스/PASS)", "지속적인 양질의 답변", "커뮤니티 추천", "기여도 점수 임계치"],
        en_desc: "Verified Korean contributor. The authentic voice of Korea on this platform.",
        ko_desc: "인증된 한국인 기여자. 이 플랫폼에서 한국의 진짜 목소리.",
      },
      {
        id: "honorary",
        badge: "🏅",
        name: "Honorary Korean",
        nameKo: "명예한국인",
        color: "#B8860B",
        conditions: ["깊은 한국 지식", "높은 토론 기여도", "경연 성과", "커뮤니티 평가", "모더레이터 + 알고리즘 심사"],
        en_desc: "The highest honor for a foreign member. Awarded to those who truly understand Korea.",
        ko_desc: "외국인 멤버의 최고 영예. 한국을 진정으로 이해하는 사람에게 수여.",
      },
    ],
    koreanPath: "한국인 경로",
    foreignPath: "글로벌 경로",
    koreanPathSub: "한국 국적자용",
    foreignPathSub: "글로벌 멤버용",
  },
};

export default function RankSystem({ lang }) {
  const t = T[lang];

  return (
    <section className="rank-system" id="ranks">
      <div className="container">
        <div className="rank-system__header">
          <span className="section-label">{t.label}</span>
          <h2 className="rank-system__headline">
            {t.headline.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
          </h2>
          <p className="rank-system__sub">{t.sub}</p>
        </div>

        {/* Path labels */}
        <div className="rank-system__paths">
          <div className="rank-path rank-path--korean">
            <span>🇰🇷</span>
            <div>
              <strong>{t.koreanPath}</strong>
              <span>{t.koreanPathSub}</span>
            </div>
          </div>
          <div className="rank-path rank-path--global">
            <span>🌏</span>
            <div>
              <strong>{t.foreignPath}</strong>
              <span>{t.foreignPathSub}</span>
            </div>
          </div>
        </div>

        {/* Rank cards */}
        <div className="rank-system__cards">
          {t.ranks.map((rank, i) => (
            <div
              key={rank.id}
              className={`rank-card ${rank.korean ? "rank-card--korean" : ""} ${rank.id === "honorary" ? "rank-card--honorary" : ""}`}
              style={{ "--rank-color": rank.color, "--rank-i": i }}
            >
              {/* Connector line */}
              {i < t.ranks.length - 1 && (
                <div className="rank-card__connector" />
              )}

              <div className="rank-card__header">
                <span className="rank-card__badge">{rank.badge}</span>
                <div className="rank-card__name-wrap">
                  <span className="rank-card__name">{rank.name}</span>
                  {rank.nameKo && (
                    <span className="rank-card__name-ko">{rank.nameKo}</span>
                  )}
                </div>
                <span className="rank-card__num">0{i + 1}</span>
              </div>

              <p className="rank-card__desc">
                {lang === "en" ? rank.en_desc : rank.ko_desc}
              </p>

              {/* Flag example for Citizen */}
              {rank.flag && (
                <div className="rank-card__flag-examples">
                  {["🇰🇷", "🇺🇸", "🇯🇵", "🇧🇷", "🇩🇪"].map(f => (
                    <span key={f} className="rank-card__flag-ex">
                      {f} <span>Citizen</span>
                    </span>
                  ))}
                  <span className="rank-card__flag-more">···</span>
                </div>
              )}

              <ul className="rank-card__conditions">
                {rank.conditions.map((c, j) => (
                  <li key={j}>
                    <span className="rank-card__check">✓</span>
                    {c}
                  </li>
                ))}
              </ul>

              {rank.id === "honorary" && (
                <div className="rank-card__honorary-badge">
                  🏅 {lang === "en" ? "Via 이달의 대한외국민 tournament" : "이달의 대한외국민 토너먼트 통해"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
