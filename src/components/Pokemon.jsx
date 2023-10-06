import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import Estado from "./Estado";

import './Pokemon.css';
import {Badge} from 'react-bootstrap';


const Pokemon = () => {
    const { url } = useContext(MyContext);
    const [pokemonSel, setPokemonSel] = useState({});
    const {pokemonSelected} = useParams();

    const getDataPokemon = async() =>{
        console.log(url+pokemonSelected);
        const response = await fetch(url+pokemonSelected);
        const pokemonResponse = response.json().then(
            (data)=> {
                console.log(data);
                setPokemonSel(data);
            }
        );
    }
    useEffect(()=> {
            getDataPokemon();
    },[pokemonSelected]);
    return (
        <div className="cont border border-0 mw-100 vh-90 gap-4">
            <div className="whoIs d-flex align-items-center gap-5 mt-5">
                <img src={pokemonSel?.sprites?.other['official-artwork'].front_default} alt="imagen pokemon"/>
                <div className="data d-flex flex-column text-warning fw-5">
                    <h2>¿Quién es?</h2>
                    <br/>
                    <p>Nombre: {pokemonSel.name}</p>
                    <p>Altura: {pokemonSel.height}</p>
                    <p>Peso: {pokemonSel.weight}</p>
                    <p>Habilidades: {pokemonSel.abilities?.map(ability => (
                        <p key={pokemonSel.id}>{ability.ability.name}</p>
                        ))}</p>
                </div>
            </div>
            <div className="stats d-flex flex-column mt-5">
                <h2 className="text-center mt-4 text-success">Estadísticas</h2>
                {
                    pokemonSel.stats?.map(stat => (
                        <p className="ms-5 me-5 text-success">{stat.stat.name} : <Estado value={stat.base_stat} /> {stat.base_stat}</p>
                    ))
                }
            </div>
            <div className="type  mt-4 mb-5 pb-4 mb-5">
                <h2 className="text-center mt-3 text-danger">Tipo</h2>
                <div className="types d-flex justify-content-center">
                    {
                        pokemonSel.types?.map(type => (
                            <h3><Badge pill bg="danger" className="me-3">{type.type.name}</Badge></h3>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}


export default Pokemon;