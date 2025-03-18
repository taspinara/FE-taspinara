import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";


const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
                if (!res.ok) throw new Error("Failed to fetch pokemon");
                const data = await res.json();
                setPokemons(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pokemons.map(({ name, url }) => (
                <PokemonCard key={name} name={name} url={url} />
            ))}
        </div>
    )
}

export default Home