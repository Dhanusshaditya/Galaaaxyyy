import React from "react";
import eventPoster from "../assets/ipcl-poster.webp";
import ipcllogo from "../assets/ipcl-logo.png";
import "../index.css";

export default function UpcomingEvents() {
  return (
    <section className="upcoming-events">
        <h2 className="upcoming-title">Upcoming Events</h2>
        <div className="upcoming-container">
            <div className="poster">
            <img src={eventPoster} alt="Event Poster" />
            </div>
            <div className="event-details">
            <div className="event-header">
                <img src={ipcllogo} alt="IPCL Logo" />
            </div>
            <p className="event-description">
                IPCL 2.0 marks the evolution of the Indian Para Cricket League, expanding its scale, impact, and prestige.
            </p>
            <p className="event-description">
                Featuring four teams like the previous model, the tournament is set to elevate competition and provide greater
                opportunities for specially-abled cricketers to showcase their talent.
            </p>
            </div>
        </div>
    </section>
  );
}