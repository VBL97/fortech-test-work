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

    console.log(pokemons);

    switch (true) {
      case Object.keys(pokemons).includes('weight'):
        console.log(pokemons);
        dispatch(setPokemonsData([pokemons]));
        break;
      case Object.keys(pokemons).includes('pokemon'):
        // Code below have to be refactored
        Promise.all(
          pokemons.pokemon.map((el) => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${el.pokemon.name}`).then((response) =>
              response.json(),
            );
          }),
        )
          .then((data) => dispatch(setPokemonsData(data)))
          .catch((error) => console.error(error));
        console.log(pokemons);
        break;
      default:
        fetchRequestedPokemons(pokemons.results);
        break;
    }
  }, [dispatch, pokemons]);

  function fetchRequestedPokemons(data) {
    Promise.all(
      data.map((el) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${el.name}`).then((response) =>
          response.json(),
        );
      }),
    )
      .then((data) => dispatch(setPokemonsData(data)))
      .catch((error) => console.error(error));
  }

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
