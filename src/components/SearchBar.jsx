import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <input type="text" placeholder="Search by product name or price..." onChange={handleChange} />
  );
};

export default SearchBar;