import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../components/hook/useForm";
import { PokemonContext } from "./PokemonContext"; //Se  usa en la función del final pero está comentada.

export const PokemonProvider = ({children}) => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const[offset, setOffset] = useState(0);

    //Utilizar CustomHook - useForm
    const {valueSearch, onInputChange, onResetForm} = useForm ({
        valueSearch: '',
    })

    //Estados para la aplicación simples (la carga y el filtrado)
    const[loading, setLoading] = useState(true)
    const[active, setActive] = useState(false) //para que esté inactivo por defecto


    //Llamar 50 pokemones a la API
    const getAllPokemons = async (limit = 50) =>{
        // Link hacia la pokeapi
        const baseURL = 'https://pokeapi.co/api/v2/'

        // Llamada a la API para sacar la informaciòn de los pokemon
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data

        })

        const results = await Promise.all(promises)

        setAllPokemons([...allPokemons, ...results]);
        setLoading(false)

    }

    //Llamar todos los pokemones de la API
    const getGlobalPokemons = async() =>{
        // Link hacia la pokeapi
        const baseURL = 'https://pokeapi.co/api/v2/'

        // Llamada a la API para sacar la informaciòn de los pokemon
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
        const data = await res.json();
        

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data

        })

        const results = await Promise.all(promises)

        setGlobalPokemons(results)
        setLoading(false)

    }

    //Llamar a los pokemon por ID
    const getPokemonByID = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data

    }


     useEffect(() => {
         getAllPokemons()
     },[offset]);

     useEffect(() => {
        getGlobalPokemons()
    },[])

  // BTN Cargar más...
   const onClickLoadMore = () => {
    setOffset(offset + 50)
   }

   // Función del filtro + el State (el estado)
   const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,

   });

   const [filteredPokemons, setfilteredPokemons] = useState([])

   
   const handleCheckbox = e => { //Función que tomará el evento

    setTypeSelected({
        ...typeSelected,
        [e.target.name]: e.target.checked
    })

    if(e.target.checked){
        const filteredResults = globalPokemons.filter(pokemon => pokemon.types.map (type => type.type.name). includes (e.target.name));

        setfilteredPokemons([...filteredPokemons, ...filteredResults])
    }else{

        //desmarca el checkbox, entonces filtra lo que quitaron 
        const filteredResults = filteredPokemons.filter(pokemon => !pokemon.types.map (type => type.type.name). includes (e.target.name));

        setfilteredPokemons([...filteredResults])
    }
    

   }
  

    return (
         <PokemonContext.Provider 
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonByID,  // utilizando en en la pokemonpage para obetener información
                onClickLoadMore, // Función para cargar más pokemons
                // para el componente loader
                loading,
                setLoading,
                // BTN (botón) del filtro
                active,
                setActive,
                //para los checkbox del filtro
                handleCheckbox,
                filteredPokemons,
            }}
         >
            {children}
        </PokemonContext.Provider>

    );
    
};