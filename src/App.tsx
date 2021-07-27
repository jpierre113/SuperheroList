import React, {useEffect, useState} from 'react';
import HeroCard from './HeroCard';
import './App.css';

function App() {
  const [heroes, setHeroes] = useState([]); // use an empty array as initial value

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then(response => response.json())
    .then(data => setHeroes(data));
    }, []);

  return (
    <div className="App">
      <h1 className="siteTitle">Superhero List</h1>
      {
        heroes.map((hero, index) => {
          return (
            <HeroCard
              {...hero}
              key={index}
            />
          );
        })
      }
    </div>
  );
}

export default App;
