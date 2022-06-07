import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
const Contact = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <main>
      <motion.div
        className="contact"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />

        <Logo />
        <ContactForm />

        <Buttons left={"/projet-1"} />
      </motion.div>
    </main>
  );
};

export default Contact;
