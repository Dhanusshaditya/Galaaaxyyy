import React from 'react';
import Accordion from './Accordion';

const faqs = [
  {
    question: 'What is the Rotaract Club of Coimbatore Gaalaxy all about?',
    answer: 'We are a dynamic group of young leaders driven by service, fellowship, and impact. As part of Rotary International District 3206, we work on community projects, professional development, and cultural collaborations to build a better world, starting from our own city.'
  },
  {
    question: 'Who can join your club, and how do I become a member?',
    answer: 'Anyone from the age of 18, with a passion for service and personal growth is welcome! Just fill out our interest form or connect with any of our members through social media or at our events — we’d love to have you in the Gaalaxy!'
  },
  {
    question: 'What kind of activities does the club do throughout the year?',
    answer: 'From social service drives and leadership workshops to cultural fests and international collaborations, our calendar is packed with opportunities for learning, networking, and meaningful impact — 365 days of purpose and power!'
  },
  {
    question: 'How is Rotaract different from other youth clubs or NGOs?',
    answer: 'Rotaract is part of a global movement under Rotary International. That means our work doesn’t stop at just volunteering — we focus on leadership development, global exposure, professional growth, and sustainable community impact.'
  },
];

export default function FAQSection() {
  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <Accordion data={faqs} />
    </section>
  );
}
