import React from "react";
import { NavLink } from 'react-router-dom';

import "./Home.css"


export default () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return(
        <div className="container mw-100 vh-100">
            <div className="portada d-flex align-items-center">
            <h1>¡Bienvenido Maestro Pokemón!</h1>
            </div>
            <div className= "img-portada">
            <NavLink className={setActiveClass} to= "/Pokemones">
            <img src="/src/assets/img/pikachu.png" alt="Pikachu" className="pikachu" />
                </NavLink>
            </div>
        </div>
    )
}