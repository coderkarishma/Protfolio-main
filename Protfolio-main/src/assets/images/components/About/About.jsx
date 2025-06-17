import React from "react";
import AboutSVG from "../../about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>

            Hello! MY name is Karishma Sain and  I am a MERN Stack Developer and Machine Learning Enthusiast with a passion for building high-performance, intuitive web applications.
            Motivated and detail-oriented B.Tech student specializing in Computer Science and Engineering with strong skills in Java, web development, and data structures. Adept at problem-solving and delivering innovative tech solutions, with hands-on experience in Machine Learning & AI-based projects. Committed to self-improvement and driven to excel in the tech industry.
          </p>
          <p>
            I'm currently studying at IMS Engineering College as a B.Tech CSE student{" "}
            <a
              href="http://www.imsec.ac.in/"
              target="_blank"
              className="app__links"
            >
              IMSEC
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
