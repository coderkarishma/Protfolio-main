import "aos/dist/aos.css";
import React from "react";
import TypeAnimation from 'react-type-animation';
import HeroSvg from "../../hero.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">

          {/* Introduction */}
          <TypeAnimation
            sequence={["Hi, my name is", 1000]}
            wrapper="p"
            repeat={1}
            speed={60}
            cursor={false}
            className="app__hero-title"
          />

          {/* Name Animation */}
          <TypeAnimation
            sequence={["Karishma Sain", 1000]}
            wrapper="h1"
            repeat={1}
            speed={50}
            cursor={false}
            className="app__hero-container_text-name"
          />

          {/* Looping Subtitle */}
          <TypeAnimation
            sequence={[
              "I am a MERN Developer, Problem Solver, and AI/ML Enthusiast.", 2000,
              "I enjoy learning about new Technologies.", 2000,
              "Let's learn from each other.", 2000
            ]}
            wrapper="h3"
            repeat={Infinity}
            speed={40}
            deletionSpeed={30}
            cursor={true}
            className="app__hero-container_text-subtitle"
          />

        </div>

        <div className="app__hero-container_image">
          <img src={HeroSvg} alt="Developer working on multiple screens" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
