import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {FaLinkedinIn } from "react-icons/fa";
import Connection from "../../../images/connections.svg";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate message sending (You can integrate emailjs.send here)
    setIsSent(true);
    setError("");
    e.target.reset();
  };

  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        {/* Social Section */}
        <div className="app__contact-container_socials">
          <p className="app__contact-container_contacts-touch">- Get in Touch</p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the specified
            social media handles below. Preferably LinkedIn.
          </p>
          <ul className="app__contact-container_contacts-links">
            <li>
              <a
                href="https://www.linkedin.com/in/karishma-sain-2173a823b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} color="#0077B5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="app__contact-container_form">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>

          {isSent && <p className="success-message">Message sent successfully! ✅</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
