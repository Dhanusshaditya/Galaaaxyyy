import React from "react";
import "../index.css";
import bg from "../assets/GROUP PHOTO A.webp";

export default function Hero() {
  return (
    <section className="Hero" id="hero">
      <img src={bg} alt="Rotaract Club Group" className="hero_bg" loading="lazy" decoding="async" fetchpriority="low" />
      <div className="hero_content">
        <p className="hero_subtitle">Engage • Empower • Evolve</p>
        <h1 className="hero_title">
          ROTARACT CLUB OF COIMBATORE GAALAXY
        </h1>
      </div>
    </section>
  );
}