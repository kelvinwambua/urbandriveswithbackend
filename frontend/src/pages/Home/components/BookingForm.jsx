import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    pickupDate: '',
    returnDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form-container">
      <h3>Book Your Perfect Ride</h3>
      <p>Choose your pickup location and dates to get started</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Pickup Location</label>
          <input 
            type="text" 
            id="location" 
            name="location"
            placeholder="Nairobi, Kenya"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickup-date">Pickup Date</label>
          <input 
            type="date" 
            id="pickup-date" 
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="return-date">Return Date</label>
          <input 
            type="date" 
            id="return-date" 
            name="returnDate"
            value={formData.returnDate}
            onChange={handleInputChange}
          />
        </div>
        <a href="/cars" className="btn btn-primary">
          Browse Cars
        </a>
      </form>
    </div>
  );
};

export default BookingForm;