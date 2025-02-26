import { useEffect } from "react"


const PokemonList = ({ pokemons, setPokemons, loading, setLoading, error, setError }) => {

    useEffect(() => {
        // Define an async function to fetch data
        const fetchPokemons = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPokemons(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        // Call the async fetch function
        fetchPokemons();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) return <p>Loading Pokémon...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="font-serif p-1 flex flex-col items-center">
            <h1 className="text-center text-2xl bg-amber-300 shadow-2xl w-3xl ">Pokemon List</h1>
            <ul className="list-none p-0">
                {pokemons.map((pokemon, index) => (
                    <li 
                        className="bg-amber-100 mx-0.5 my0 p-1 border-r-2 w-3xl capitalize text-center"
                        key={index}>
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonList
