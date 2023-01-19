import React from "react";
import "../Styles/Navbar.css";

const ResNav = ({removeResMenu}) => {
  const scrollToTOp=()=>{
    window.scrollTo(0,0);
    removeResMenu();
  }
  const scrollToSkills=()=>{
    window.scrollTo(0,800);
    removeResMenu();
  }
  const scrollToProjects=()=>{
    window.scrollTo(0,2300);
    removeResMenu();
  }
  const scrollToConatact=()=>{
    window.scrollTo(0,2870);
    removeResMenu();
  }
  return (
    <div className="Resp_nav">
      <ul className="Res_links">
        <li className="Res_link" onClick={scrollToTOp}> About </li>
        <li className="Res_link" onClick={scrollToSkills}> Skills </li>
        <li className="Res_link" onClick={scrollToProjects}> Projects </li>
        <li className="Res_link" onClick={scrollToConatact}> Contact </li>
      </ul>
    </div>
  );
};

export default ResNav;
