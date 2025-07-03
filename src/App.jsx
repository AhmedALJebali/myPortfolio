import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/1-header/Header";
import Hero from "./component/2-hero/Hero";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import Footer from "./component/5-footer/Footer";
import ProjectDetails from "./component/3-main/ProjectDetails/ProjectDetails";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function App() {
  let [disable, setdisable] = useState(true);
  useEffect(() => {
    console.log(scrollY);
    window.onscroll = () => {
      if (scrollY > 200) {
        setdisable(false);
      } else {
        setdisable(true);
      }
    };
  }, []);

  return (
    <div id="up" className="container">
    
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="divider" />
                <Main />
                <div className="divider" />
                <Contact />
                <div className="divider" />
              </>
            }
          />
          <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
      <Footer />
      <a id="scrroler" className={disable ? "disable" : null} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
