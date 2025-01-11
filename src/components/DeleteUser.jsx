import React from 'react';

const DeleteUser = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        const data = await response.json();
        console.log('User deleted:', data);
        sessionStorage.clear();
        onDelete();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default DeleteUser;