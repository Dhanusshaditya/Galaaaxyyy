import React from 'react';
import aboutImage from '../assets/GROUP PHOTO A.webp';
import { FaArrowRight } from 'react-icons/fa';
import '../index.css';
import ScrollReveal from '../effects/ScrollReveal';

const About = () => (
  <section id="About" className="about-section py-20 bg-[#111] text-white px-6">
    <h2 className="section-title">Who are we ?</h2>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image Column */}
      <div className="about-image">
        <img src={aboutImage} alt="Company Devices" className="rounded-lg shadow-lg" />
      </div>

      {/* Content Column */}
      <div className="about-content text-center md:text-left">
        {/* Remove the surrounding <p> tag if ScrollReveal is meant to be a block element */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
        >
          The Rotaract Club of Coimbatore Gaalaxy is a vibrant youth-driven organization committed to service, leadership, and fellowship.
          Chartered in the year 2009, for almost 15 Years, we have strived to create lasting impact through innovative projects that uplift communities and empower individuals.
          Our members, passionate students and professionals—work together on initiatives spanning education, health, environment, and youth development.
          With a spirit of unity and action, we bridge the gap between ideas and execution, making service a lifestyle.
        </ScrollReveal>
        
        <a href="#Contact" className="hero_contact_btn inline-block mt-6"> {/* Added mt-6 for spacing */}
          Get in Touch <FaArrowRight className="button_icon" />
        </a>
      </div>
    </div>
  </section>
);

export default About;