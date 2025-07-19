// frontend/src/components/sections/Contact.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setStatus("");
  
    const url =
      "https://script.google.com/macros/s/AKfycbwx88QLqA6Fx2K9EctdAOL7v_Df8o9fR5jHhm3PDm8U_XfVFgvX2xWr8gOIMXPiCfcH/exec";
  
    const data = new FormData();
    data.append("Name", formData.name);
    data.append("Phone", formData.phone);
    data.append("Email", formData.email);
    data.append("Message", formData.message);
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });
  
      const text = await response.text();
      console.log("Server response:", text);
  
      // ✅ Updated condition to match "Added" (your actual response)
      if (text.toLowerCase().includes("added")) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Unexpected response: " + text);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(true);
      setStatus("Failed to send message. Please try again.");
    }
  
    setLoading(false);
  };

  return (
    <section className="contact-section" id="Contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in touch with us</h2>
          <p>
            Questions, ideas, or just want to connect? We're just a message away. Let’s keep the conversation and collaboration, going.
          </p>
          <div className="contact-details">
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <strong>Phone Number</strong>
              <br />
              <a href="tel:+91 6374406542" className="subtext-1">
                +91 6374406542
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <strong>Email Address</strong>
              <br />
              <a href="mailto:therealdesignnode@gmail.com" className="subtext-1">
                designnodeagency@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              maxLength="10"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="contact_btn" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
            {status && (
              <p style={{ marginTop: "10px", color: error ? "red" : "green" }}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
