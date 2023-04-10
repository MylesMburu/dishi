import React, { useState } from 'react';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Search from './components/Search';
import Nav from './components/Nav';
import MealCard from './components/MealCard';

function App() {

  const [meals, setMeals] = useState([]);

  const handleSearch = (searchQuery) => {
    fetch(`http://localhost:3001/meals/${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

    

    <>
    <Nav/>
    <Home/>
    <div className="App">
      <Search onSearch={handleSearch} />
      <div className="meal-container">
        {meals &&
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
    <Contacts/>
    </>

  );
}

export default App;
