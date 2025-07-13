import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">✨ #1 Car Rental Platform</div>
          <h1>Find, book and rent a car <span>Easily</span></h1>
          <p>Get a car wherever and whenever you need it with your browser! Premium vehicles, instant booking, and 24/7 support.</p>
        </div>
        <div className="hero-image">
          <img 
            src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/hero.png" 
            alt="Car rental service showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;