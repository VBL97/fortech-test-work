// Check later
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const pokemonsInitialState = {
  maxCount: 0,
  initialPokemonsData: [],
  loading: false,
  initialPokemonsTypes: [],
};

export const PokemonsSlice = createSlice({
  name: "pokemons",
  initialState: pokemonsInitialState,
  reducers: {
    setPokemonsTypes: (state, action) => {
      state.initialPokemonsTypes = action.payload;
    },
    setPokemonsData: (state, action) => {
      state.loading = false;
      state.initialPokemonsData = action.payload;
    },
    setPokemonsMaxCount: (state, action) => {
      state.maxCount = action.payload;
    },
    //но вообще загрузку нужно делать при помощи санков
    setIsLoading: state => {
      state.loading = true;
    },
  },
});

// Selectors
const selectPokemonsData = state => state.pokemons.initialPokemonsData;
const selectPokemonsTypes = state => state.pokemons.initialPokemonsTypes;
const selectLoadingStatus = state => state.pokemons.loading;
const selectMaxCount = state => state.pokemons.maxCount;

export {
  selectPokemonsData,
  selectPokemonsTypes,
  selectLoadingStatus,
  selectMaxCount,
};

export const {
  setPokemonsData,
  setPokemonsTypes,
  setPokemonsMaxCount,
  setIsLoading,
} = PokemonsSlice.actions;
