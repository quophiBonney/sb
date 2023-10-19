import React from "react";
import Skill from "./Skill";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Clones from "./Clones";
import Faq from "./Faq";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Clones />
      <ContactForm />
      <Pricing />
      <Faq />
    </>
  );
};

export default Home;
