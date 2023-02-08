/*Pagina que se utiliza para cuando la pagina cargue*/
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CardPokemon } from '../components'
import { PokemonContext } from '../context/PokemonContext'

export const SearchPage = () => {
    const location = useLocation();

    const {globalPokemons} = useContext(PokemonContext);

    const filteredPokemons = globalPokemons.filter(pokemon => 
        pokemon.name.includes(location.state.toLowerCase())
    ); //va a filtrar por letra o combinaciòn de letras por ejemplo si colocan "a" saldrán todos los pokemon que empiecen por esa letra

    return(
        <div className='container'>
            <p className="p-search">
                Se encontraron <span>{filteredPokemons.length}</span> resultados:
            </p>
            <div className="card-list-pokemon container">
                {filteredPokemons.map(pokemon => (
                    <CardPokemon pokemon={pokemon} key = {pokemon.id}/>
                ))} 
            </div>

        </div>
    );
};
