import { createSlice } from '@reduxjs/toolkit';

const pokemonsInitialState = {
  initialFetchParams: 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0',
  initialPokemonsTypes: undefined,
  initialPokemons: undefined,
  initialPokemonsData: undefined,
};

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: pokemonsInitialState,
  reducers: {
    setFetchParams: (state, action) => {
      state.initialFetchParams = action.payload;
    },
    setPokemonsTypes: (state, action) => {
      state.initialPokemonsTypes = action.payload;
    },
    setPokemons: (state, action) => {
      state.initialPokemons = action.payload;
    },
    setPokemonsData: (state, action) => {
      state.initialPokemonsData = action.payload;
    },
  },
});

// Selectors
const selectPokemons = (state) => state.pokemons.initialPokemons;
const selectPokemonsFetchParams = (state) => state.pokemons.initialFetchParams;
const selectPokemonsData = (state) => state.pokemons.initialPokemonsData;
const selectPokemonsTypes = (state) => state.pokemons.initialPokemonsTypes;

export { selectPokemons, selectPokemonsFetchParams, selectPokemonsData, selectPokemonsTypes };

export const { setPokemons, setFetchParams, setPokemonsData, setPokemonsTypes } =
  PokemonsSlice.actions;
