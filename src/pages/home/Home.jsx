import React from "react";
import Skill from "./Skill";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
