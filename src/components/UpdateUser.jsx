import React, { useState, useEffect } from 'react';

const UpdateUser = ({ userId }) => {
  const [userData, setUserData] = useState({
    email: '',
    username: '',
  });

  useEffect(() => {
 
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      const data = await response.json();
      console.log('User updated:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
      <input name="username" value={userData.username} onChange={handleChange} placeholder="Username" />
      {/* Add other fields as necessary */}
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateUser;