import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import SocialNetwork from "../components/SocialNetwork";

const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <SocialNetwork />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project1;
