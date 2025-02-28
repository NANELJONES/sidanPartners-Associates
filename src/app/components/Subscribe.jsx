"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('/api/emailSubscribe', formData);
      setMessage('Successfully subscribed!');
      setFormData({ name: '', email: '' });
    } catch (error) {
      setMessage(error.response?.data?.error || 'Subscription failed. Try again.');
    }
    
    setLoading(false);
  };

  return (
    <div className='py-[3em] border-t-2 border-primary_color border-b-2'>
      <h2>Subscribe <br/>
        to our newsletter</h2>
      <br/>
      <form onSubmit={handleSubmit} className='grid gap-[1em] md:grid-cols-3 gap-2'>
        <div className='w-full'>
          <label htmlFor="name" className='text-primary_color'>Name</label> <br />
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='w-full text-sm bg-transparent border-2 border-primary_color bg-none text-primary_color p-[1em]' 
            placeholder='Enter your Name' 
          />
        </div>

        <div className='w-full'>
          <label htmlFor="email" className='text-primary_color'>Email</label> <br />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='w-full text-sm bg-transparent border-2 border-primary_color bg-none text-primary_color p-[1em]' 
            placeholder='Enter your Email' 
          />
        </div>

        <button type="submit" className='bg-primary_color min-h-[50px] max-w-[200px] text-white rounded-none p-[1em] self-end h-[70%]' disabled={loading}>
          <p className='text-white'>{loading ? 'Subscribing...' : 'Subscribe'}</p>
        </button>
      </form>
      {message && <p className='mt-2 text-primary_color'>{message}</p>}
    </div>
  );
}

export default Subscribe;
