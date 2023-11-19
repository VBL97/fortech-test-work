import React, { useEffect } from 'react';
import Main from '../../pages/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPokemons,
  setPokemonsTypes,
  setPokemonsData,
  selectPokemonsFetchParams,
  selectPokemons,
} from '../../store/reducers/pokemons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  let dispatch = useDispatch();
  let pokemonsFetchParams = useSelector(selectPokemonsFetchParams);
  const pokemons = useSelector(selectPokemons);

  useEffect(() => {
    fetch(`${pokemonsFetchParams}`)
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)));
  }, [pokemonsFetchParams]);

  useEffect(() => {
    if (pokemons === undefined) {
      return;
    }
    if (Object.keys(pokemons).includes('name')) {
      console.log([pokemons]);
      dispatch(setPokemonsData([pokemons]));
    } else {
      Promise.all(
        pokemons.results.map((el) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${el.name}`).then((response) =>
            response.json(),
          );
        }),
      )
        .then((data) => dispatch(setPokemonsData(data)))
        .catch((error) => console.error(error));
    }
  }, [dispatch, pokemons]);

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
