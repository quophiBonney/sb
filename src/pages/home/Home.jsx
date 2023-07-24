import React from "react";
import Skill from "./Skill";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Clones from "./Clones";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Clones />
      <ContactForm />
    </>
  );
};

export default Home;
