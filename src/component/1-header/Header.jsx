import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [show, setShow] = useState(false); // Toggle mobile menu
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("currentmode") || "dark";
  });

  // Apply theme to body
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("currentmode", theme);
  }, [theme]);

  // Toggle between light/dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Menu links
  const links = [
    { label: "About", href: "/#" },
    { label: "Articles", href: "/#" },
    { label: "Projects", href: "/#main" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header id="header" className="flex">
      {/* Hamburger menu icon */}
      <button onClick={() => setShow(true)} className="menu icon-menu"></button>
      <div />
      {/* Main navigation */}
      <nav className="border">
        <ul className="flex">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme toggle button */}
      <button onClick={toggleTheme} className="theme flex">
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

      {/* Mobile menu */}
      {show && (
        <div className="border fixed">
          <ul className="module">
            <li>
              <button
                className="icon-close"
                onClick={() => setShow(false)}
              ></button>
            </li>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} onClick={() => setShow(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
