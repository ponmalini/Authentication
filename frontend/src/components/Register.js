import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Register.css';

function Register() {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const details = { username, password };
        
        axios.post('http://localhost:3500/api/auth', details)
            .then((res) => {
                console.log('Response:', res.data);
                alert('Form submitted successfully');
                setUsername('');
                setPassword('');
                setErrorMessage(''); // Clear error message on success
            })
            .catch((err) => {
                console.error('Error:', err);
                if (err.response) {
                    // Server responded with a status other than 200 range
                    setErrorMessage(err.response.data.message || 'Server Error');
                } else if (err.request) {
                    // Request was made but no response
                    setErrorMessage('No response from server');
                } else {
                    // Something else caused an error
                    setErrorMessage('Error occurred while submitting');
                }
            });
    };
    const back = () => {
        navigate('/login');
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Register</button>
                <button type="button" onClick={back}>Login</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}

export default Register;
