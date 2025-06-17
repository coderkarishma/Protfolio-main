import React from "react";
import LinkedIn from "../../socials/linkedin.png";
import Facebook from "../../socials/facebook.png";
import Instagram from "../../socials/instagram.png";
import Connection from "../../../images/connections.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      {/* Left: Image Section */}
      <div className="app__footer-image">
        <img src={Connection} alt="Connections" />
      </div>

      {/* Right: Footer Content */}
      <div className="app__footer-content">
        <h2>Let's Connect!</h2>
        <p>Follow me on social media for updates and collaborations.</p>
        
        {/* Social Media Links */}
        <div className="app__footer-socials footer-linked">
          <a href="https://www.linkedin.com/in/karishma-sain-2173a823b/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" /> LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="app__footer-copyright">
          © {new Date().getFullYear()} Karishma Sain. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
