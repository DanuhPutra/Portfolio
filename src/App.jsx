import React from "react";
import { useState } from "react";
import "./index.css";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/about";
import Skill from "./components/skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
