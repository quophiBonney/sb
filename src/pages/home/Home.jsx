import React from "react";
import Banner from "./Banner";
import About from "../home/About";
import Projects from "../home/Projects";
import Certifications from "../home/Certifications";
import Skill from "../home/Skill";
import Contact from "../home/Contact";
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
