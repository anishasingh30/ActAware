
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/api/auth', formData);
      console.log(response.data);
      window.location.href = '/home'; 
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <img src="https://i.pinimg.com/736x/ef/bc/b5/efbcb5a40f4494d1d1ca06b309981e39.jpg" alt="Login" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
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

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;