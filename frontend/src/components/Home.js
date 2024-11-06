// src/Home.js
import React, { useEffect, useState } from 'react';
import { getHome } from './authService';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return navigate('/login');

      try {
        const { data } = await getHome(token);
        setMessage(data.message);
      } catch (err) {
        console.error('Invalid token', err);
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
