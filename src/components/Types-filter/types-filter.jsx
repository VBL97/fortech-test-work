import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPokemonsTypes } from '../../store/reducers/pokemons';
import './types-filter.css';
import { typesColors } from '../../utils/const';

export default function TypesFilter() {
  const PokemonsTypes = useSelector(selectPokemonsTypes);
  const [panelOpened, setPanelOpened] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  function onAdvanceButtonClick() {
    setPanelOpened(!panelOpened);
  }

  function onTagClick(typeName) {
    console.log(activeTags);
    setActiveTags((prevActiveTags) => {
      if (prevActiveTags.includes(typeName)) {
        // If the tag is already active, remove it
        return prevActiveTags.filter((tag) => tag !== typeName);
      } else {
        // If the tag is not active, add it
        return [...prevActiveTags, typeName];
      }
    });
  }

  return (
    <>
      <button className='open-button' onClick={onAdvanceButtonClick}>
        {panelOpened ? '↑ Hide types for search' : '↓ Show types for search'}
      </button>

      <div className={`types__container ${panelOpened ? 'slide-in' : 'slide-out'}`}>
        {PokemonsTypes?.map((type) => (
          <button
            className={`types-tag ${activeTags.includes(type.name) ? 'active' : ''}`}
            key={type.name}
            style={{
              backgroundColor: activeTags.includes(type.name) ? typesColors[type.name] : '',
            }}
            onClick={() => onTagClick(type.name)}>
            {type.name}
          </button>
        ))}
      </div>
    </>
  );
}
