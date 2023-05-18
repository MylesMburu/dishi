import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImSearch } from 'react-icons/im';
import MealCard from './MealCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const onSearch = async (searchTerm) => {
    try {
      const response = await axios.get("http://localhost:5000/api/search", {
        params: { q: searchTerm },
      });
      setRecipes(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <div>
      <div id="Find" className="h-40 bg-gray-400">
        <div className="flex justify-center items-center flex-row">
          <form onSubmit={handleSubmit}>
            <ImSearch className="pr-1 w-5 mt-8" />
            <input
              type="text"
              placeholder="What would you like to cook?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:w-6/12 rounded mt-8 relative sm:w-3/12"
            />
            <button type="submit" className="mt-8 ml-2 bg-white px-1 rounded">
              Search
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Search;
