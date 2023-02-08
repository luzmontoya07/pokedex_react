//card de los pokemons con su nombre y tipo
import React from "react";
import { Link } from 'react-router-dom';

//se destructura lo que se mandó por las proops
export const CardPokemon = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
            <div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default} // imagenes de la API se encuentra como "sprites en la parte de pokemon//ditto" 
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}> 
							{type.type.name}
						</span>
					))}
				</div>
			</div>


        </Link>
    )
}