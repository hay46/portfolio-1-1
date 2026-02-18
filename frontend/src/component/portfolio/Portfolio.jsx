import React from "react";
import "./Portfolio.css";
import { FaReact, FaGithub, FaCode, FaPalette } from "react-icons/fa";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-intro">
        A showcase of my skills, projects, and the tools I love to work with.
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <FaReact className="icon" />
          <h2>Frontend Development</h2>
          <p>Building responsive and dynamic web apps with React & Vite.</p>
        </div>

        <div className="skill-card">
          <FaCode className="icon" />
          <h2>Clean Code</h2>
          <p>
            Writing maintainable, modular, and scalable code for long-term
            growth.
          </p>
        </div>

        <div className="skill-card">
          <FaGithub className="icon" />
          <h2>Version Control</h2>
          <p>Experienced with Git, GitHub, and team collaboration workflows.</p>
        </div>

        <div className="skill-card">
          <FaPalette className="icon" />
          <h2>Design & Culture</h2>
          <p>
            Inspired by Ethiopian heritage — I blend tech with meaningful
            design.
          </p>
        </div>
      </div>

      <div className="portfolio-contact">
        <h2>📞 Contact Me</h2>
        <p>
          <strong>Email:</strong> haymanotebabu2@gmail.com
          <br />
          <a
            href="https://haymanotebabu2@gmail.com"
            target="_blank"
            rel="noreferrer"
          ></a>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/hay46" target="_blank" rel="noreferrer">
            github.com/hay46
          </a>
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
