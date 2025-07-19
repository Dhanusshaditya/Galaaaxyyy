import React from "react";
import "../index.css";
import rotaryLogo from "../assets//ROTARACT PRAYER.png";
import fourWayTestLogo from "../assets/the_4_way_test.webp";

export default function PrayerSection() {
  return (
    <section className="prayer-section">
      <div className="rotaract-prayer">
        <div className="text">
          <h2>ROTARACT PRAYER</h2>
          <p>
            Oh! God! Our Almighty Father & Ruler of the Universe, We thank thee
            for the inspiration you have given us for the Rotaract movement
            based upon Fellowship through Service. We humbly beg you to continue
            thy grace to enable us to do Our Service to ourselves and to our
            neighbors and to honor and glory of thy holy name.
          </p>
        </div>
        <div className="image">
          <img src={rotaryLogo} alt="Rotary Logo" />
        </div>
      </div>

      <div className="four-way-test">
        <div className="image">
          <img src={fourWayTestLogo} alt="4 Way Test Logo" />
        </div>
        <div className="text">
          <h2>4 WAY TEST</h2>
          <p>“Of the things we think, say or do:</p>
          <ul>
            <li>Is it the <strong>TRUTH</strong>?</li>
            <li>Is it <strong>FAIR</strong> to all concerned?</li>
            <li>Will it build <strong>GOODWILL</strong> and <strong>BETTER FRIENDSHIPS</strong>?</li>
            <li>Will it be <strong>BENEFICIAL</strong> to all concerned?”</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
