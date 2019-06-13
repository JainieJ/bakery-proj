import React from "react";
import contactBcg from "../img/contactBcg.jpg";
import Hero from "./../components/Hero";
import ContactContent from "./../components/ContactPage/ContactContent";

const ContactPage = () => {
  return (
    <>
      <Hero img={contactBcg} />
      <ContactContent />
    </>
  );
};

export default ContactPage;
