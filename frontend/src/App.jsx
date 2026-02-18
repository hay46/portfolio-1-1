import React from "react";
import Header from "./component/header/Header.jsx"
import About from "./component/about/About.jsx"
import Home from "./component/home/Home"
import Portfolio from "./component/portfolio/Portfolio.jsx"
import  Contact  from "./component/contact/Contact.jsx"
import Service from "./component/service/Service.jsx"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
