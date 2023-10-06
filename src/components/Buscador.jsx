import React from "react";
import { useContext, useState , useEffect } from "react";
import MyContext from '../MyContext';

import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import './Buscador.css'


const Buscador = () => {
const { pokemones , pokemonSelected , setPokemonSelected } = useContext(MyContext);
const [pokemonSorted, SetPokemonSorted] = useState([]);
const navigate = useNavigate();

const sortPokemons = () => {
    const pokemonsSorted = pokemones.sort((a,b) => {
        let pokemon1 = a.name.toUpperCase();
        let pokemon2 = b.name.toUpperCase();
        if (pokemon1 < pokemon2){ return -1};
        if (pokemon1 > pokemon2){ return 1};
        if (pokemon1 === pokemon2){ return 0}
    });
    SetPokemonSorted(pokemonsSorted);
}
useEffect(() => {
    sortPokemons();
},[]);
const catchPokemon = (e) =>{
    setPokemonSelected(e.target.value);
    navigate(`/Pokemones/${e.target.value}`);
}
    return (
        <div>
            <Form.Select aria-label="Pokemones"
                        onChange={catchPokemon}
                        value={pokemonSelected}
                        >
                    <option value='Pokemones' disabled={true}>Pokemones</option>
                    {pokemonSorted?.sort().map(pokemon => (
                        <option key ={pokemon.name} value={pokemon.name} className='sel'>{pokemon.name}</option>
                    ))}
            </Form.Select>
        </div>
    )
}


export default Buscador;