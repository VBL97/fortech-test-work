import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../../pages/Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  setPokemonsTypes,
  setPokemonsData,
  setPokemonsMaxCount,
  setIsLoading,
} from "../../store/reducers/pokemons";
import Pokeapi from "../../utils/pokeapi";

function App() {
  const dispatch = useDispatch();
  const api = new Pokeapi();

  useEffect(() => {
    dispatch(setIsLoading());
    Promise.all([
      api.fetchPokemonTypes(),
      api.fetchPokemons(),
      api.fetchPokemonsCount(),
    ]).then(data => {
      dispatch(setPokemonsTypes(data[0]));
      dispatch(setPokemonsData(data[1]));
      dispatch(setPokemonsMaxCount(data[2]));
    });
  }, []);

  return (
    <>
      <Header />
      {/* <Pokemon /> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
