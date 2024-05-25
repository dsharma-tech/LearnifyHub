import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>LearnifyHub</h1>
        <span>E-LEARNING & SKILL DEVELOPMENT</span>
      </div>
      
      <input type='checkbox' id='check' />
      <div className={click ? "navbar active" : "navbar"}>
        <ul onClick={() => setClick(false)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          
        </ul>
        <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
      </div>
      <label htmlFor="check" className="open-menu" onClick={handleClick}><i className="fas fa-bars"></i></label>
    </div>
  );
};

export default Header;
