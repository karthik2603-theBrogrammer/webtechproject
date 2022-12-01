import React, { useRef, useState, useEffect } from "react";
import "./landing.css";
import GLOBE from "vanta/dist/vanta.globe.min.js";

export default function Landing() {
  const myRef = useRef();
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 200.0,
          scale: 1,
          scaleMobile: 0.5,
          color: 0xffd700,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div id="vantajs" ref={myRef}>
      <div id="logo-container">
        <h1>
          nftCart<span>.com</span>
        </h1>
      </div>
      <div id="info-container">
        <h1 id="info-heading">Find Your Desired NFT's Here!</h1>
        
      </div>
    </div>
  );
}
