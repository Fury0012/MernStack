import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    fetchSuperHeroes();
  }, []);

  const fetchSuperHeroes = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response.data.results);
        setAllHeroes(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div className="App">
      <h1>Fetching Pokémon</h1>
      
      {allHeroes.length > 0 && (
        <div>
          {allHeroes.map((pokemon, index) => (
            <p key={index}>{pokemon.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
