import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Logging in with username:', username);

      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }), 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      console.log('Received token:', data.token);

      sessionStorage.setItem('token', data.token);

      const usersResponse = await fetch('https://fakestoreapi.com/users');
      if (!usersResponse.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const users = await usersResponse.json();

      const user = users.find((u) => u.username === username);
      if (!user) {
        throw new Error('User not found.');
      }

 
      sessionStorage.setItem('user', JSON.stringify(user));


      alert('Logged in successfully!');


      onLogin(user);

    } catch (error) {
      console.error('Login error:', error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;