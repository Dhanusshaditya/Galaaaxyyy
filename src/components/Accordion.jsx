import React, { useState } from 'react';
import '../index.css';

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, idx) => (
        <div key={idx} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() =>
              setOpenIndex(openIndex === idx ? null : idx)
            }
          >
            {item.question}
            <span>{openIndex === idx ? '-' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
