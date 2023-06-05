import React from "react";
import Banner from "./Banner";
import About from "../About";
import Projects from "../Projects";
import Certifications from "./Certifications";
import Skill from "../Skill";
import Contact from "../Contact";
function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default Home;
