import React, { useRef } from "react";
import "./hero.css";
import developer from "../../animation/dev.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
// @ts-ignore
import avatar from "/me-modified.png";
import { Typewriter } from "react-simple-typewriter";
function Hero() {
  const lottieRef = useRef();
  return (
    <section id="hero" className="hero flex ">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src={avatar}
            className="avatar"
            alt=""
          />
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="icon-verified"
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            <Typewriter
              words={[
                "Hello, I'm Ahmed",
                "A Frontend Developer",
                "A Freelancer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          <p>
            <Typewriter
              words={[
                `Front-End Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, and React. I have a strong understanding of component-based architecture, DOM manipulation, and RESTful API integration.
Transitioning from a leadership role in sales, I bring exceptional skills in task management, communication, and problem-solving. I'm passionate about clean code, performance optimization, and continuous learning in modern front-end technologies.
I'm actively seeking freelance opportunities to help businesses build and improve their online presence through modern, responsive front-end development.
`,
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={15}
              delaySpeed={500}
            />
          </p>
          <div className="icons flex ">
            <a
              className="icon icon-instagram"
              href="https://www.instagram.com/ahmedaljebali"
            ></a>
            <a
              className="icon icon-github"
              href="https://github.com/AhmedALJebali"
            ></a>                                                                                                                                                 
            <a className="icon icon-linkedin" 
            href="https://www.linkedin.com/in/ahmedaljebali"
            ></a>
          </div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          loop={true}
          animationData={developer}
        />
      </div>
    </section>
  );
}

export default Hero;
