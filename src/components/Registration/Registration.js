// Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // Import the CSS file

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    batchNo: 'Batch 1',  // Batch No field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/register', formData);
      console.log('Response:', response.data);
      alert('Registration Successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration Failed!');
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Registration Form</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="batchNo"
          placeholder="Batch No"
          value={formData.batchNo}
          readOnly // Makes the field non-editable
          className="form-input form-input-readonly" 
        />
        <button type="submit" className="form-button">Click here to Register</button>
      </form>
    </div>
  );
};


