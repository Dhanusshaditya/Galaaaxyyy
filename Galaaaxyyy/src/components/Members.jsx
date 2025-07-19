import React from "react";
import srivarshan from "../assets/srivarshan.jpg";
import susanna from "../assets/susanna.png";
import yuvaraj from "../assets/yuvaraj.jpg";
import "../index.css"

export default function Members() {
  const members = [
    {
      name: "Rtr. SRIVARSHAN R R",
      role: "PRESIDENT",
      image: srivarshan,
    },
    {
      name: "Rtr. SUSANNA",
      role: "SECRETARY ADMINISTRATION",
      image: susanna,
    },
    {
      name: "Rtr. YUVARAJ CR",
      role: "SECRETARY COMMUNICATION",
      image: yuvaraj,
    },
  ];

  const stats = [
    { label: "DUAL MEMBERSHIP", value: "2" },
    { label: "DISTRICT TRAINERS", value: "4" },
    { label: "PROJECTS", value: "500+" },
    { label: "MEMBERS", value: "38" },
    { label: "YEARS OF SERVICE", value: "15+" },
  ];

  return (
    <section className="members-section">
        <h2 className="section-heading">STARS OF GAALAXY</h2>

        <div className="members-container">
            {members.map((member, index) => (
            <div className="member-card" key={index}>
                <div className="card-image-wrapper">
                <img src={member.image} alt={member.name} className="member-image" />
                </div>
                <div className="member-info">
                <p className="member-name">{member.name}</p>
                <p className="member-role">{member.role}</p>
                </div>
            </div>
            ))}
        </div>

        <button className="view-all-btn">View All</button>

        <div className="stats-container">
            {stats.map((stat, index) => (
            <div className="stat-box" key={index}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <div className="underline"></div>
            </div>
            ))}
        </div>
    </section>
  );
}
