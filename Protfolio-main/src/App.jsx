import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.scss";

import {
  About,
  Contact,
  Earphone,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
 
} from "../src/assets/images/components";

const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      <Earphone />
    </>
  );
};

export default App;
