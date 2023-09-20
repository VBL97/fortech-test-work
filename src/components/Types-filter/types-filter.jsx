import React from 'react';
import { useSelector } from 'react-redux';
import { selectPokemonsTypes } from '../../store/reducers/pokemons';
import './types-filter.css';
import { typesColors } from '../../utils/const';

export default function TypesFilter() {
  const PokemonsTypes = useSelector(selectPokemonsTypes);

  console.log(PokemonsTypes);

  return (
    <div className='types__container'>
      {PokemonsTypes?.map((type) => (
        <button
          className='types-tag'
          key={type.name}
          style={{ backgroundColor: `${typesColors[type.name]}` }}>
          {type.name}
        </button>
      ))}
    </div>
  );
}
