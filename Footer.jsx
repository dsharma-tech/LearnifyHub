// import React from "react"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email === "") {
      alert("Please enter your email.");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        alert("Subscribed with email: " + email);
      } else {
        alert("Invalid email address. Please enter a valid email.");
      }
    }
  };
  return (
    <>

      <div className='newsletter'>
        <div className='left'>
          <h1>Subscribe to our Newsletter for the latest updates and stay informed</h1>
          <span>Deep within the shadow of towering peaks</span>
        </div>
        <div className='right'>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fa fa-paper-plane" onClick={handleSubscribe}></i>
        </div>
      </div>

      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>LearnifyHub</h1>
            <span>E-LEARNING & SKILL DEVELOPMENT</span>
            <p>Empowering learners to thrive through accessible e-learning and skill development</p>
            <div className="social">
              <a href="https://www.facebook.com"><i className="fab fa-facebook-f icon"></i></a>
              <a href="https://www.instagram.com"><i className="fab fa-instagram icon"></i></a>
              <a href="https://www.twitter.com"><i className="fab fa-twitter icon"></i></a>
              <a href="https://www.youtube.com"><i className="fab fa-youtube icon"></i></a>
            </div>

          </div>
          <div className='box-link'>
            <h3>Explore</h3>
            <ul>
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
          </div>


          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 44444
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                learnifyhub@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer
