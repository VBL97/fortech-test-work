import React, { useEffect } from 'react';
import Main from '../../pages/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPokemons,
  setPokemonsTypes,
  selectPokemonsFetchParams,
} from '../../store/reducers/pokemons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  let dispatch = useDispatch();
  let pokemonsFetchParams = useSelector(selectPokemonsFetchParams);

  useEffect(() => {
    fetch(`${pokemonsFetchParams}`)
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)));
  }, [pokemonsFetchParams]);

  fetch('https://pokeapi.co/api/v2/type/')
    .then((res) => res.json())
    .then((data) => dispatch(setPokemonsTypes(data.results)));

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
