import React from "react";
import "./footer.css";
function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer id="footer" className="flex ">
      <ul className="flex">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Speaking</a>
        </li>
        <li>
          <a href="#">Uses</a>
        </li>
      </ul>
      <p>
        © {year} ِAhmed Al-Jebali. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
