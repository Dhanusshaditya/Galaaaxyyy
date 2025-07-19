import React from "react";
import "../index.css";

import img1 from "../assets/INSTAGRAM.png";
import img2 from "../assets/FACEBOOK.png";
import img3 from "../assets/LINKEDIN.png";
import img4 from "../assets/X.png";
import img5 from "../assets/YOUTUBE.png";

export default function Socials() {
  return (
    <section className="socials-section" id="socials">
      <h2 className="socials-title">OUR SOCIALS</h2>
      <div className="socials-grid">
        <img src={img1} alt="Social 1" loading="lazy" />
        <img src={img2} alt="Social 2" loading="lazy" />
        <img src={img3} alt="Social 3" loading="lazy" />
        <img src={img4} alt="Social 4" loading="lazy" />
        <img src={img5} alt="Social 5" loading="lazy" />
      </div>
    </section>
  );
}
