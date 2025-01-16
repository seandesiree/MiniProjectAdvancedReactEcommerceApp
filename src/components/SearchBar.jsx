import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search by product name or price..." 
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;