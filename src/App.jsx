import React from "react";
import HeroSection from "./components/HeroSection";
import BoostCards from "./components/BoostCards";
import FigmaModal from "./components/FigmaModal";
import "./styles/App.css";

function App() {
  return (
    <div className="app-root">
      <HeroSection />
      <BoostCards />
      <FigmaModal />
    </div>
  );
}

export default App;