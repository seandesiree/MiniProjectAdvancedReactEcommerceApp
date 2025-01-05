
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: { username: email, password },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    console.log(data)
    sessionStorage.setItem('token', data.token);
    // sessionStorage.setItem('user', JSON.stringify(data.user));
    alert('Logged in successfully!');
    onLogin(data.user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;