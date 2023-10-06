import React from "react";
import Buscador from "../components/Buscador";

import "./Pokemones.css"

export default () => {
    return (
        <div className="container border border-0 mw-100 vh-100 d-flex justify-content-center">
            <div className="search d-flex flex-column w-50">
                <h1> ¡Selecciona un Pokemón! </h1>
                <br/>
                <Buscador />
            </div>
        </div>
    )
}