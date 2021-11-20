import React from "react";
import StandoutImg1 from "./images/Work only with the best.png";
import "./CSS/Hero.css";

const Hero = () => {
  return (
    <div className="hero1" id="hero">
      <div className="BackgroundFilter">
        <div className="box">
          <div className="WritenContiner">
            <h2 className="Title">
              MRM
            </h2>
            <h3 className="Slogan">
              Find The Best Supply Of Stationary
              <br />
              For Your Workspace
            </h3>
            <a className="Button" href="#footer">
              Contact Us
            </a>
          </div>
          <div className="StandoutImg">
            <img src={StandoutImg1} alt="Work only with the best" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
