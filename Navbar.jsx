import { useState, useEffect } from "react";
import "./Navbar.css";

const T = {
  en: {
    sections: ["G2K", "K2G", "Among G", "GaDa", "SHIM"],
    login: "Sign In",
    join: "Join",
    tagline: "Real Korea. Real People.",
  },
  ko: {
    sections: ["G2K", "K2G", "어몽G", "가다", "쉼"],
    login: "로그인",
    join: "가입",
    tagline: "진짜 한국. 진짜 사람들.",
  },
};

const SECTION_COLORS = {
  G2K:    "#2A6B8A",
  K2G:    "#C8392D",
  "Among G": "#5B7FA6",
  "어몽G":   "#5B7FA6",
  GaDa:   "#B8660B",
  "가다": "#B8660B",
  SHIM:   "#3A7A5C",
  "쉼":   "#3A7A5C",
};

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = T[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark">K</span>
          <span className="navbar__logo-dash">—</span>
          <span className="navbar__logo-name">Agora</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__sections" aria-label="Main sections">
          {t.sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase().replace(/\s/g, "-")}`}
              className="navbar__section-link"
              style={{ "--sec-color": SECTION_COLORS[sec] || "#5B9E8A" }}
            >
              {sec}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="navbar__controls">
          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "active" : ""}>EN</span>
            <span className="lang-toggle__divider" />
            <span className={lang === "ko" ? "active" : ""}>한</span>
          </button>

          <a href="#login" className="btn-ghost">{t.login}</a>
          <a href="#join" className="btn-primary">{t.join}</a>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {t.sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec.toLowerCase().replace(/\s/g, "-")}`}
            className="mobile-menu__link"
            style={{ "--sec-color": SECTION_COLORS[sec] || "#5B9E8A" }}
            onClick={() => setMenuOpen(false)}
          >
            {sec}
          </a>
        ))}
        <div className="mobile-menu__footer">
          <a href="#login" className="btn-ghost">{t.login}</a>
          <a href="#join" className="btn-primary">{t.join}</a>
        </div>
      </div>
    </header>
  );
}
