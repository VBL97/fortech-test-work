import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Search-panel.css';
import pokeball from '../../img/pngaaa.com-96218.png';
import dismiss from '../../img/dismiss.png';
import { setFetchParams, setPokemonsData } from '../../store/reducers/pokemons';

export default function SearchPanel() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState();

  function HandleShowButtonClick(evt) {
    evt.preventDefault();
    // dispatch(setFetchParams(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`));
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => res.json())
      // .then((data) => console.log(new Array(data)));
      .then((data) => dispatch(setPokemonsData(new Array(data))));
  }

  function handleSearchCancelClick() {
    dispatch(setFetchParams(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`));
  }

  return (
    <div className='search-panel'>
      <button className='action-button' onClick={handleSearchCancelClick}>
        <img className='action-button-image' src={dismiss} alt='pokeball' />
      </button>
      <form className='search-form'>
        <input
          placeholder='Search by name'
          value={pokemonName}
          onChange={(evt) => setPokemonName(evt.target.value)}
          className='search-input'></input>
        <button className='action-button' onClick={(evt) => HandleShowButtonClick(evt)}>
          <img className='action-button-image' src={pokeball} alt='pokeball' />
        </button>
      </form>
    </div>
  );
}
