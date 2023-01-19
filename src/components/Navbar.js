import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import ResNav from "./ResNav";

import "../Styles/Navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  //navbar border on scroll
  const [navStyle, setNavStyle] = useState(false);
  const changeNavStyle = () => {
    if (window.scrollY >= 70) {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
  };
  window.addEventListener("scroll", changeNavStyle);

  const removeResMenu=()=>{
    setShowMenu(false)
  }

  const scrollToTOp=()=>{
    window.scrollTo(0,0);
    
  }
  const scrollToSkills=()=>{
    window.scrollTo(0,500);
    
  }
  const scrollToProjects=()=>{
    window.scrollTo(0,1000);
    
  }
  const scrollToConatact=()=>{
    window.scrollTo(0,1670);
    
  }
  return (
    <>
      <header className={navStyle ? "Navbar Navbar-bg" : "Navbar"}>
        <div className="logo">
          <BsPerson className="logoimg" />
          <span className="lname"> Shreyash </span>{" "}
        </div>

        <ul className="nav_links">
          <li className="link" onClick={scrollToTOp}> About </li> 
          <li className="link" onClick={scrollToSkills}> Skills </li>{" "}
          <li className="link" onClick={scrollToProjects}> Projects </li>{" "}
          <li className="link" onClick={scrollToConatact}> Contact </li>{" "}
        </ul>

        {showMenu ? (
          <GiTireIronCross
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="Burger"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="Burger"
          />
        )}
      </header>{" "}
      {showMenu && <ResNav removeResMenu={removeResMenu}/>}{" "}
    </>
  );
};

export default Navbar;
