import { createSlice } from '@reduxjs/toolkit';

const pokemonsInitialState = {
  initialFetchParams: undefined,
  initialPokemons: undefined,
  initialPokemonsData: undefined,
};

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: pokemonsInitialState,
  reducers: {
    setPokemons: (state, action) => {
      state.initialPokemons = action.payload;
    },
    setFetchParams: (state, action) => {
      state.initialFetchParams = action.payload;
    },
    setPokemonsData: (state, action) => {
      state.initialPokemonsData = action.payload;
    },
  },
});

const selectPokemons = (state) => state.pokemons.initialPokemons;
const selectPokemonsFetchParams = (state) => state.pokemons.initialFetchParams;
const selectPokemonsData = (state) => state.pokemons.initialPokemonsData;

export { selectPokemons, selectPokemonsFetchParams, selectPokemonsData };

export const { setPokemons, setFetchParams, setPokemonsData } = PokemonsSlice.actions;
