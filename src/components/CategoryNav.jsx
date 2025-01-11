import React, { useState, useEffect } from 'react';

const CategoryNav = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <nav>
      <button onClick={() => setCategory('')}>All</button>
      {categories.map((category) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;