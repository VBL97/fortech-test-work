import React from 'react';
import './Action-button.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPokemons,
  selectPokemonsFetchParams,
  setPokemons,
  setFetchParams,
} from '../../store/reducers/pokemons';

export default function ActionButton() {
  const pokemonsToShow = [];
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);
  const pokemonsParams = useSelector(selectPokemonsFetchParams);

  function HandleShowButtonClick() {
    dispatch(setFetchParams('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0'));
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)));
    // .then((data) =>
    //   data.results.forEach((element) => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
    //       .then((pokemonData) => pokemonData.json())
    //       .then((data) => dispatch(setPokemons(data)));
    //   }),
    // );
    // .then((data) => dispatch(setPokemons(data)));
    // dispatch(setPokemons(pokemonsToShow));
  }

  return (
    <button className='action-button' onClick={HandleShowButtonClick}>
      Show me pokemons!
    </button>
  );
}
