import React, { useState, useMemo } from "react"; // Import core React tools
import "./main.css"; // Import component-specific styling
import customdata from "./myprojects.json"; // Import static project data
import { AnimatePresence, motion } from "framer-motion"; // Import animation utilities
import { Link } from "react-router-dom";
function Main() {
  // Stores the currently selected category (filter)
  const [active, setActive] = useState("all project");

  // Loads the project list once into state (static JSON, no need for fetch)
  const [myprojects] = useState(customdata);

  // List of filter button labels
  const buttons = ["all project", "html&Css", "javascript", "react"];

  // Filters the projects based on selected category
  const filteredProjects = useMemo(() => {
    return myprojects.filter((project) => {
      const categories = project.Category?.split(" ") || []; // split "react jsx" → ["react", "jsx"]
      return active === "all project" || categories.includes(active);
    });
  }, [active, myprojects]); // only re-run when filter or data changes

  return (
    <main id="main" className="flex">
      {/* Left side: filter buttons */}
      <section className="left flex">
        {buttons.map((btn) => (
          <button
            key={btn} // using button text as a unique key
            onClick={() => setActive(btn)} // set selected category
            className={active === btn ? "active" : null} // highlight the active filter
          >
            {btn}
          </button>
        ))}
      </section>

      {/* Right side: filtered project cards */}
      <section className="right flex">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className="card"
            >
              <Link
                to={`/ProjectDetails/${project.id}`}
                className="card-link"
                style={{ display: "block", textDecoration: "none" }}
              >
                <img
                  width="100%"
                  className="picture-self"
                  src={project.imgpath[0]}
                  alt={project.title}
                />
                <div className="box">
                  <h1 className="title">{project.title}</h1>
                  <p className="subtitle">{project.subtitle}</p>
                </div>
              </Link>

              {/* Icons (outside the Link so clicking icons doesn't trigger routing) */}
              <div className="flex icons">
                <div className="flex">
                  <a
                    className="icon-link"
                    href={project.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="icon-github"
                    href={project.github || "#"}
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main; // Export component for use in app
