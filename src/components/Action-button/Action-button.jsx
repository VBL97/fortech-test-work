import React, { useState } from 'react';
import './Action-button.css';
import { useDispatch } from 'react-redux';
import { setFetchParams, setPokemonsData } from '../../store/reducers/pokemons';
import pokeball from '../../img/pngaaa.com-96218.png';

export default function ActionButton() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState();

  console.log(pokemonName);

  function HandleShowButtonClick(evt) {
    evt.preventDefault();
    // dispatch(setFetchParams(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`));
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => res.json())
      // .then((data) => console.log(new Array(data)));
      .then((data) => dispatch(setPokemonsData(new Array(data))));
  }

  function handleSearchCancelClick() {
    console.log('cancel');
    dispatch(setFetchParams(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`));
  }

  return (
    <>
      <button className='action-button' onClick={handleSearchCancelClick}>
        <img className='action-button-image' src={pokeball} alt='pokeball' />
      </button>
      <form className='action-form'>
        <input
          placeholder='Search...'
          value={pokemonName}
          onChange={(evt) => setPokemonName(evt.target.value)}
          className='search-input'></input>
        <button className='action-button' onClick={(evt) => HandleShowButtonClick(evt)}>
          <img className='action-button-image' src={pokeball} alt='pokeball' />
        </button>
      </form>
    </>
  );
}
