import React, { useState } from "react";
import { useDispatch } from "react-redux";
import pokeball from "../../img/pokeball.png";
import dismiss from "../../img/dismiss.png";
import "./Search-panel.css";
import Pokeapi from "../../utils/pokeapi";
import { setIsLoading, setPokemonsData } from "../../store/reducers/pokemons";

export default function SearchPanel() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const api = new Pokeapi();

  // Add debounce

  function handleShowButtonClick(evt) {
    evt.preventDefault();
    dispatch(setIsLoading());
    api
      .fetchPokemonByName(pokemonName.toLowerCase())
      .then(data => dispatch(setPokemonsData([data])));
  }

  function handleSearchCancelClick() {
    setPokemonName("");
    dispatch(setIsLoading());
    api.fetchPokemons().then(data => dispatch(setPokemonsData(data)));
  }

  return (
    <div className="search-panel">
      {pokemonName.length > 0 ? (
        <button
          className="action-button"
          onClick={handleSearchCancelClick}
          type="button"
        >
          <img className="action-button-image" src={dismiss} alt="cancel" />
        </button>
      ) : null}

      <form className="search-panel__form">
        <input
          placeholder="Search by name"
          value={pokemonName}
          onChange={evt => setPokemonName(evt.target.value)}
          className="search-panel__input"
        />
        <button
          className="action-button"
          onClick={evt => handleShowButtonClick(evt)}
          type="submit"
        >
          <img className="action-button-image" src={pokeball} alt="pokeball" />
        </button>
      </form>
    </div>
  );
}
