import React from 'react'

const PokemonDetails = ({ id, name }) => {
    return (
        <div className='flex justify-around items-center bg-amber-300'>
            <h1 className='text-primary text-4xl capitalize'>{name}</h1>
            <div className='avatar'>
                <figure className='w-56 rounded-full bg-black'>
                    <img 
                        src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                        alt={name} 
                    />
                </figure>
            </div>
        </div>
    )
}

export default PokemonDetails