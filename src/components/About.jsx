import React from "react";
import Partner from "./Partner";
import "./CSS/About.css"

const About = () => {
  return (
    <div className="about1" id="about">
      <div className="first">
      <h2 className="title">About Our Company</h2>
      <p className="para">
        MRM Stationary provide all Type office stationaries/Accessories and house keeping
        materials at affordable prices with After Sale Service on Branded Product
        to Schools & Colleges,Co-oprerate offices, small Business and hospitality place like
        hotel,hospital,etc in mumbai
        To Know More About Follow Us on our <a className="media" href='#footer'>Social Media Pages</a>.
      </p>
      </div>
      <Partner />

    </div>
  );
}; 

export default About;
