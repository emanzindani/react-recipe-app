import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "99684806";
  const APP_KEY = "c3b3d11b02060c2f721fc6755fd9c7a5";
// empty array in useeffect means that the fetchData function will only be called on initial render and not on subsequent renders when the data set changes
  useEffect(() => {

    }, []);
// add await when fetching any external data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className= "App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
