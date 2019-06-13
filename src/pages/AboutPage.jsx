import React from "react";
import Hero from "../components/Hero";
import AboutContent from "../components/AboutPage/AboutContent";
import aboutBcg from "../img/aboutBcg.jpg";

const AboutPage = () => {
  return (
    <>
      <Hero img={aboutBcg} />
      <AboutContent />
    </>
  );
};

export default AboutPage;
