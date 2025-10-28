import React from "react";
import "./About.css";
import logo from "../../assets/hay-portfolio-photo.jpg";
function About() {
  return (
    <div className="About-me">
      <h1>About me</h1>
      <div className="logo">
        <img src={logo} alt="" />

        <p className="resilient-web ">
          I'm Haymanot, a frontend developer with a passion for building modern,
          resilient web experiences using React, Vite, and clean, scalable
          tooling. I specialize in crafting intuitive user interfaces and
          troubleshooting complex build environments—from npm quirks to proxy
          configurations—always aiming for sustainable, professional-grade
          solutions. <br />
          <br />
          <br /> My workflow blends precision with curiosity: I don’t just fix
          errors—I investigate their root causes to prevent them from happening
          again. Whether switching from deprecated tools like node-sass to
          modern alternatives like sass, or optimizing GitHub tracking and
          network setups, I strive to keep my projects lean, fast, and
          future-proof. Beyond the code, <br />
          <br /> I’m deeply inspired by Ethiopian history and culture. I believe
          technology can carry identity, and I’m exploring ways to weave Amharic
          language, poetic naming, and heritage into branding—especially in real
          estate and digital platforms. My goal is to build something that’s not
          just functional, but meaningful.
        </p>
      </div>
      <div className="mediaquery-bootstrap">
        <h1>HTML&CSS</h1>
        <h1>mediaquery & bootstrap</h1>
        <h1>javascript & react</h1>
        <h1>bootstrap</h1>
        <h1>node.js</h1>
      </div>
    </div>
  );
}

export default About;
