import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="resume-page">
      <h1>My Résumé</h1>
      <p>
        Welcome to my résumé page! Here you’ll find my experience, education,
        and key projects that showcase my skills in frontend and fullstack
        development.
      </p>

      <div className="resume-sections">
        <div>
          <h2>🎓 Education</h2>
          <ul>
            <li>Bachelor’s Degree in software Enginer</li>
            <li>Frontend Development — React, Vite, JavaScript</li>
          </ul>
        </div>

        <div>
          <h2>💼 Experience</h2>
          <ul>
            <li>Developed responsive React portfolios with clean UI/UX</li>
            <li>Worked with GitHub, npm, and modern build tools</li>
          </ul>
        </div>

        <div>
          <h2>🛠 Skills</h2>
          <p>
            React • JavaScript • HTML • CSS • Node.js • GitHub • Vite •
            Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
