import React from 'react';
import { Facebook, InstagramDark, InstagramLight, YouTube } from "@ridemountainpig/svgl-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-info">
          <img 
            src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/Logo_With_Text.png" 
            alt="Urban Drives Logo" 
            className="footer-logo"
          />
          <p>Nairobi, Kenya</p>
          <p>+254740185793</p>
          <p>chelseamuegi@gmail.com</p>
        </div>
        <div className="footer-col">
          <h3>Our Product</h3>
          <a href="#">Career</a>
          <a href="#">Car</a>
          <a href="#">Packages</a>
          <a href="#">Features</a>
          <a href="#">Priceline</a>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <a href="#">Download</a>
          <a href="#">Help Centre</a>
          <a href="#">Guides</a>
          <a href="#">Partner Network</a>
          <a href="#">Cruises</a>
          <a href="#">Developer</a>
        </div>
        <div className="footer-col">
          <h3>About Urban Drives</h3>
          <a href="#">Why choose us</a>
          <a href="#">Our Story</a>
          <a href="#">Investor Relations</a>
          <a href="#">Press Center</a>
          <a href="#">Advertise</a>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">

              <Facebook />
            </a>
            <a href="#" className="social-icon">
              <InstagramDark />
            </a>
            <a href="#" className="social-icon">
              <YouTube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2025 • Urban Drives, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;