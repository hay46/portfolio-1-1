import React, { useState, useEffect } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react"; // modern icons

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll behavior
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setNavbarOpen(false);
    }
  };

  // Shadow effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => handleScroll("home")}>
        Haymanot
      </div>

      <button className="nav-toggle" onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`nav-links ${navbarOpen ? "open" : ""}`}>
        {["home", "about", "portfolio", "service", "contact"].map((item) => (
          <li
            key={item}
            onClick={() => handleScroll(item)}
            className={active === item ? "active" : ""}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
