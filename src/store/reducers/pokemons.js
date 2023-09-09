import { createSlice } from '@reduxjs/toolkit';

const pokemonsInitialState = {
  initialFetchParams: undefined,
  initialPokemons: undefined,
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
  },
});

const selectPokemons = (state) => state.pokemons.initialPokemons;
const selectPokemonsFetchParams = (state) => state.pokemons.initialFetchParams;

export { selectPokemons, selectPokemonsFetchParams };

export const { setPokemons, setFetchParams } = PokemonsSlice.actions;
