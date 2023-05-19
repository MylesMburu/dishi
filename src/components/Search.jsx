import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImSearch } from 'react-icons/im';
import { AiOutlineClockCircle } from "react-icons/ai"; 


const Search = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipe] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=4`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      // Update the recipes state with the retrieved data
      setRecipe(data.results);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <div>
      <div id="Find" className="h-150 bg-gray-400">
        <div className="flex justify-center items-center flex-row">
          <form onSubmit={handleSubmit}>
            <ImSearch className="pr-1 w-5 mt-8" />
            <input
              type="text"
              placeholder="What would you like to cook?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="md:w-6/12 rounded mt-8 relative sm:w-3/12"
            />
            <button type="submit" className="mt-8 ml-2 bg-white px-1 rounded">
              Search
            </button>
          </form>
        </div>

        <div className='flex flex-row md:grid-cols-3 gap-5'>

        <div className='flex flex-row md:grid-cols-3 gap-5'>

        {recipes.map((recipe) => {
          return(

            <div className='card ' key={recipe.id}>
            {/* cards */}
            <img src={recipe.image} alt=" "className='image' />
            <div className='m-4'>
                <span className='font-bold text-center'>{recipe.title}</span>
                <span className='block'>Recipe by {recipe.sourceName}</span>
            </div>
            <div className='badge'>
            <AiOutlineClockCircle className='inline-block pr-1 w-5'/>
              <span>{recipe.maxReadyTime} mins</span>
            </div>
        </div>
          )
        }
          
        )}
      
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Search;
