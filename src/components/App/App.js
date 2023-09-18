import React, { useEffect } from 'react';
import ActionPanel from '../Action-panel/Actition-panel';
import List from '../List/List';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons, selectPokemonsFetchParams } from '../../store/reducers/pokemons';

function App() {
  let dispatch = useDispatch();
  let pokemonsFetchParams = useSelector(selectPokemonsFetchParams);

  useEffect(() => {
    console.log(pokemonsFetchParams);
    fetch(`${pokemonsFetchParams}`)
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)));
  }, [pokemonsFetchParams]);

  return (
    <div className='app'>
      <ActionPanel />
      <List />
    </div>
  );
}

export default App;
