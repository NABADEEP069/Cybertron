import React, { useState } from 'react';
import API from '../api/api';

const NGORegistration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/ngo/register', formData);
      alert('NGO Registered Successfully!');
    } catch (error) {
      console.error(error.message);
      alert('Error registering NGO');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>NGO Registration</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default NGORegistration;
