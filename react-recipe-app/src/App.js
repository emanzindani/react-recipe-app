import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = "99684806";
  const APP_KEY = "c3b3d11b02060c2f721fc6755fd9c7a5";

  const exampleReq =
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className= "App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">search</button>
      </form>
    </div>
  );
}

export default App;
