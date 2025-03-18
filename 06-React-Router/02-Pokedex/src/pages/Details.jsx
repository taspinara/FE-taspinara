import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails";
import Loading from "../components/Loading";

const Details = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch pokemon");
                    
                }
                const data = await res.json();
                setPokemon(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [name]);

    pokemon && console.log(pokemon);
    if (loading) return <Loading />
    if (!pokemon) return <h1>Pokemon not found</h1>
    return (
        <>
            <PokemonDetails id={pokemon.id} name={pokemon.name} />
        </>
    )
}

export default Details