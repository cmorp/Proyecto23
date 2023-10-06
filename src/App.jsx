import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import MyContext from './MyContext';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';


function App() {
const [pokemones, setPokemones] = useState([]);
const [pokemonSelected, setPokemonSelected] = useState("");
const url = 'https://pokeapi.co/api/v2/pokemon/';
const globalState = { pokemones , pokemonSelected , setPokemonSelected , url }
// const navigate = useNavigate();

const getData = async() =>{
  const response = await fetch(url);
  const pokemon = await response.json();
  console.log(pokemon.results);
  const pokemonResult = pokemon.results;
  setPokemones(prevPokemon => [...pokemonResult]);
  console.log(pokemones);
}


useEffect(()=>{
  getData()
},[]);

  return (
    <div className="App">
      <MyContext.Provider value={globalState}>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path='/pokemones' element={<Pokemones />} />
            <Route  path="/pokemones/:pokemonSelected" element={ pokemonSelected !== ""? <Pokemon /> : <Navigate to="/Pokemones" />}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}


export default App;