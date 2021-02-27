import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */
  let [pokemonName,setPokemonName]=useState('');

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
      type="text"
      placeholder="Enter Pokemon Name"
      onChange={e=>{setPokemonName(e.target.value)}}
      />

      <div className="cards">
        {
          pokemons
          .filter(pokemon=>{
            if(!pokemon) return true
            if(pokemon.name.includes(pokemonName.toLowerCase().trim())){
              return true
            }
          })          
          .map(e=>
            <CardItem  name={e.name} sprite={e.sprite} />
          )
        }
      </div>
    </div>
  );
}
