import React from "react";
import { NavLink } from 'react-router-dom';

import './Navbar.css'


const Navbar = () =>{
    const setActiveClass = ({ isActive }) => ( isActive? "active" : "inactive");
    const setPokeballActive = ({ isPokeball }) => ( isPokeball? "pokeballActive" : "pokeballInactive" );
    return(
        <div className="d-flex gap-5 p-4 contenedor justify-content-end">
            <NavLink className={ setActiveClass } to='/'>
                <div className="d-flex gap-2">
                    <img src="/src/assets/img/pokebola.png" alt="Pokebola" className = "pokeballActive"/>
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink className={ setActiveClass } to='/Pokemones'>
                <div className="d-flex gap-2">
                <img src="/src/assets/img/pokebola.png" alt="Pokebola" className = "pokeballActive"/>
                    <span>Pokemones</span>
                </div>
            </NavLink>
        </div>
    )
}


export default Navbar;