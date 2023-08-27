import { useState } from "react"
import './App.css';

function App() {
  const [allHeroes, setAllHeroes] = useState([]);

  const fetchSuperHeroes = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllHeroes(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="App">
      <h1>Fetching Pokémon</h1>
      <button onClick={fetchSuperHeroes}>Fetch Pokémon</button>
      
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
