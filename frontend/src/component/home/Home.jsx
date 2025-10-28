import React from 'react'
import "./Home.css"
import logo from "../../assets/heymanot-portfolio-photo.jpg"
function Home() {
  return (
    <div>
      <div className="portfolio-image">
        <img src={logo} alt="Haymanot Ebabu" />
      </div>

      <div className="hero-page">
        <h1>
          <span>I'm Haymanot Ebabu</span>,<br />
          and also a Fullstack Web Developer
        </h1>
        <p>I am a frontend Web developer</p>
      </div>

      <div className="contact-with-me">
        <button className="contact">Contact with me</button>
        <button>My résumé</button>
      </div>
    </div>
  );
}

export default Home