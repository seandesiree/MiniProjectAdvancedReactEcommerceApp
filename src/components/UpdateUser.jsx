import React, { useState, useEffect } from 'react';

const UpdateUser = ({ userId }) => {
  const [userData, setUserData] = useState({
    email: '', username: '', password: '', 
    name: {
      firstname: '',
      lastname: ''
    },
    address: {
      city: '',
      street: '',
      number: '',
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(`Failed to fetch user data: ${error.message}`);
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNestedChange = (e, category) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('User updated:', data);
    } catch (error) {
      setError(`Failed to update user: ${error.message}`);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit} className="update-user-form">
      <h2>Update User Profile</h2>
      
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label>Username:</label>
        <input 
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>

      <div className="form-group">
        <label>First Name:</label>
        <input 
          type="text"
          name="firstname"
          value={userData.name.firstname}
          onChange={(e) => handleNestedChange(e, 'name')}
          placeholder="First Name"
        />
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input 
          type="text"
          name="lastname"
          value={userData.name.lastname}
          onChange={(e) => handleNestedChange(e, 'name')}
          placeholder="Last Name"
        />
      </div>

      <div className="form-group">
        <label>Phone:</label>
        <input 
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update Profile'}
      </button>
      
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};


export default UpdateUser;