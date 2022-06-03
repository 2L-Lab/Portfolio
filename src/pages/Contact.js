import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />

        <Logo />
        <ContactForm />

        <Buttons left={"/projet-1"} />
      </div>
    </main>
  );
};

export default Contact;
