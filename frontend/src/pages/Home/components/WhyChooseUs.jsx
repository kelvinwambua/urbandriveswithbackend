import React from 'react';


const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Best price guaranteed",
      description: "Find a lower price? We'll refund you 100% of the difference."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20a6 6 0 0 0-12 0"/>
          <circle cx="12" cy="10" r="4"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ),
      title: "Experience driver",
      description: "Don't have driver? Don't worry, we have many experienced driver for you."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "24 hour car delivery",
      description: "Book your car anytime and we will deliver it directly to you."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
          <path d="M11 14v-4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4"/>
        </svg>
      ),
      title: "24/7 technical support",
      description: "Have a question? Contact Rentcars support any time when you have problem."
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="container why-choose-us-container">
        <div className="why-choose-us-image">
          <img 
            src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/blue-car.png" 
            alt="Blue rental car"
          />
        </div>
        <div className="why-choose-us-content">
          <div className="section-header">
            <div className="badge">WHY CHOOSE US</div>
            <h2>We offer the best experience with our rental deals</h2>
          </div>
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;