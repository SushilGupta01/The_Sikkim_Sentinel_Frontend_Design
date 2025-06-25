import React, { useRef, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import BoostCards from "./components/BoostCards";
import FigmaModal from "./components/FigmaModal";
import "./styles/App.css";

function App() {
  const boostRef = useRef(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (boostRef.current) {
        boostRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="app-root">
      <HeroSection />
      <BoostCards ref={boostRef} />
      <FigmaModal />
    </div>
  );
}

export default App;