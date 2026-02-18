import React from "react";
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home";
import About from "./component/about/About.jsx";
import Portfolio from "./component/portfolio/Portfolio.jsx";
import Service from "./component/service/Service.jsx";
import Contact from "./component/contact/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home" className="section-padding"><Home /></section>
        <section id="about" className="section-padding"><About /></section>
        <section id="portfolio" className="section-padding"><Portfolio /></section>
        <section id="service" className="section-padding"><Service /></section>
        <section id="contact" className="section-padding"><Contact /></section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Haymanot Ebabu. Built with Passion & Culture.</p>
      </footer>
    </div>
  );
}
export default App;