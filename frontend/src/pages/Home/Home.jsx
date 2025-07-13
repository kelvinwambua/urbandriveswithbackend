import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
        <HowItWorks />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;