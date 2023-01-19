import React, { useEffect } from "react";
import dev from "../Assets/Dev1.png";
import ScrollReveal from "scrollreveal";
import "../Styles/About.css";
import Typewriter from "typewriter-effect";
import resume from "../Utility/resume.pdf";
import { HiOutlineDocumentText } from "react-icons/hi";


const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      duration: 2000,
      distance: "80px",
      reset: false,
    });

    sr.reveal(`.About_content`, { opacity: 0, interval: 300 });
  }, []);
  useEffect(() => {
    const sr2 = ScrollReveal({
      origin: "right",
      duration: 2000,
      distance: "80px",
      reset: false,
    });
    sr2.reveal(` .dev_img`, { opacity: 0, interval: 300 });
  }, []);
  useEffect(() => {
    const sr3 = ScrollReveal({
      origin: "top",
      duration: 6000,
      distance: "80px",
      reset: false,
    });
    sr3.reveal(` .about_sec_btn`, { opacity: 0, interval: 300 });
  }, []);

  return (
    <div className="about_section">
      <div className="about_main">
        <div className="About_content">
          <p>Welcome to my portfolio website!</p>
          <h1>
            Hey folks, I'm{" "}
            <span className="typewritereffect">
              <Typewriter
                options={{
                  strings: [
                    " Shreyash Chaple",
                    " A Programmer",
                    " A web Developer",
                    "A Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="bio">
            I am Shreyash Chaple - A frontend devloper and Programmer originally
            from Nagpur. Studying in Vishwakarma Institute Of Information
            Technology, Pune
          </p>
          <div class="about_sec_btn">
            <button className="downloadpdf">
              <a href={resume} download="Shreyash_Chaple_resume">
                <HiOutlineDocumentText
                  style={{ marginRight: "0.7rem", fontSize: "1rem" }}
                />
                Download Resume
              </a>
            </button>
            <button id="Dark-btn">
              
              Get A free Quote
            </button>
          </div>
        </div>
        <div className="dev_img">
          <img src={dev} alt="dev" />
        </div>
      </div>
    </div>
  );
};

export default About;
