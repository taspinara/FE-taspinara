import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
    const id = url.split("/")[6] || "0";
    console.log(id);
    
    return (
        <div className='card bg-neutral'>
            <figure>
                <img 
                    src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                    alt={name} 
                />
            </figure>
            <div className='card-body'>
                <h2 className='card-title text-white'>{name}</h2>
                <Link className="btn btn-secondary" to={`pokemon/${name}`}>
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export default PokemonCard