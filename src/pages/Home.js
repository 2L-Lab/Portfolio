import React from "react";
import Buttons from "../components/Buttons";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
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
    <motion.div
      className="home"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <Navigation />
      <SocialNetwork />
      <div className="home-main">
        <div className="main-content">
          <h1>PortFolio</h1>
        </div>
      </div>
      <Buttons right={"/projet-1"} />
    </motion.div>
  );
};

export default Home;
