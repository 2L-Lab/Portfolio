import React from "react";
import Buttons from "../components/Buttons";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <SocialNetwork />
      <div className="home-main">
        <div className="main-content">
          <h1>PortFolio</h1>
        </div>
      </div>
      <Buttons right={"/projet-1"} />
    </div>
  );
};

export default Home;
