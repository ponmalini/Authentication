// src/Login.js
import React, { useState } from 'react';
import { login } from './authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ username, password });
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
