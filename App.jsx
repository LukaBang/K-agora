import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionGateway from "./components/SectionGateway";
import RankSystem from "./components/RankSystem";
import EventBanner from "./components/EventBanner";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="kagora-root">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <SectionGateway lang={lang} />
        <EventBanner lang={lang} />
        <RankSystem lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
