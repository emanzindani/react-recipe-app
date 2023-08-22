import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = "99684806";
  const APP_KEY = "c3b3d11b02060c2f721fc6755fd9c7a5";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


// empty array in useeffect means that the fetchData function will only be called on initial render and not on subsequent renders when the data set changes
  useEffect(() => {
    getRecipes();
    // only going to run when you submit the query
    }, [query]);
// add await when fetching any external data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }


  return (
    <div className= "App">
      <form onSubmit={getSearch}className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  );
}

export default App;
