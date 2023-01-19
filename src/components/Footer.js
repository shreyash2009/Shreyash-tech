import React from "react";
import "../Styles/Footer.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="icons">
        <a href="https://www.instagram.com/shreyash_20.09/" target="_blank" className="icon instagram">
          <BsInstagram className="insta ri" />
        </a>
        <a href="https://github.com/shreyash2009" target="_blank" className="icon Github">
          <BsGithub className="Git ri" />
        </a>
        <a href="https://www.linkedin.com/in/shreyash-chaple-2b45aa213/" target="_blank" className="icon Linkedin">
          <BsLinkedin className="Li ri" />
        </a>
        <a href="mailto:shreyashchaple786oji@gmail.com" target="_blank" className="icon Mail">
          <SiGmail className="Gmail ri" />
        </a>
      </div>

      <div className="underline"></div>

      <p>Copyright © 2022 Shreyash Chaple . All rights reserved</p>
    </footer>
  );
};

export default Footer;
