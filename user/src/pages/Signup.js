import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/api/auth', formData);
      console.log(response.data);
      setUserName(formData.name);
      setShowPopup(true); // Show popup on success
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img src="https://i.pinimg.com/736x/f1/d0/eb/f1d0eb4acc9aa436019730c8b6adf6b5.jpg" alt="Sign Up" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              onChange={handleChange} 
              required 
            />

            <button type="submit">Create Account</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Welcome, {userName}!</h2>
            <p>Your account has been successfully created.</p>
            <button onClick={() => window.location.href = '/home'}>Let's Start</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;