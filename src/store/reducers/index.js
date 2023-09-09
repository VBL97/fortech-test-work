import { combineReducers } from '@reduxjs/toolkit';
import { PokemonsSlice } from './pokemons';

export const rootReducer = combineReducers({
  pokemons: PokemonsSlice.reducer,
});

export default rootReducer;
