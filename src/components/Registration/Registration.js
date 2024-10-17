// Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; 

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    batchNo: '1',  // Batch No field (default, non-editable)
  });

  const [phoneError, setPhoneError] = useState(''); // State to store phone error
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone input length
    if (name === 'phone' && value.length > 10) return; // Restrict to 10 digits

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if phone number is exactly 10 digits
    if (formData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
      return;
    } else {
      setPhoneError('');
    }

    try {
      const response = await axios.post('http://localhost:3030/register', formData);
      console.log('Response:', response.data);
      alert('Registration Successful!');
      navigate('/success'); 
    } catch (error) {
      console.error('Error:', error);
      alert('Registration Failed!');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>
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
        {phoneError && <p className="error-message">{phoneError}</p>}
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
          readOnly
          className="form-input form-input-readonly"
        />
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};


