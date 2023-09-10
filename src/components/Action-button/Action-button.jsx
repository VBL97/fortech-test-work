import React from 'react';
import './Action-button.css';
import { useDispatch } from 'react-redux';
import { setPokemons, setFetchParams } from '../../store/reducers/pokemons';
import pokeball from '../../img/pngaaa.com-96218.png';

export default function ActionButton() {
  const dispatch = useDispatch();

  function HandleShowButtonClick() {
    dispatch(setFetchParams('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0'));
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)));
  }

  return (
    <form className='action-form'>
      <input placeholder='Search...' className='search-input'></input>
      <button className='action-button' onClick={HandleShowButtonClick}>
        <img className='action-button-image' src={pokeball} />
      </button>
    </form>
  );
}
