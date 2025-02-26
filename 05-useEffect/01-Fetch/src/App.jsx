import { useState } from "react";
import PokemonList from "./components/PokemonList"

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  return (
    <>
      <PokemonList 
        pokemons={pokemons} 
        loading={loading} 
        error={error} 
        setPokemons={setPokemons}
        setLoading={setLoading}
        setError={setError}
      />
    </>
  )
}

export default App
