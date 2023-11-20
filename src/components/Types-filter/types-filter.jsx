import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPokemonsTypes } from '../../store/reducers/pokemons';
import './types-filter.css';
import { typesColors } from '../../utils/const';
import { setFetchParams } from '../../store/reducers/pokemons';

export default function TypesFilter() {
  const dispatch = useDispatch();
  const PokemonsTypes = useSelector(selectPokemonsTypes);
  const [panelOpened, setPanelOpened] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  function onAdvanceButtonClick() {
    setPanelOpened(!panelOpened);
  }

  function onTagClick(typeName) {
    fetchType(typeName);
    setActiveTags((prevActiveTags) => {
      if (prevActiveTags.includes(typeName)) {
        return prevActiveTags.filter((tag) => tag !== typeName);
      } else {
        return [...prevActiveTags, typeName];
      }
    });
  }

  function fetchType(type) {
    // fetch(`https://pokeapi.co/api/v2/type/${type}`)
    //   .then((data) => data.json())
    //   .then((data) => console.log(data.pokemon));

    dispatch(setFetchParams(`https://pokeapi.co/api/v2/type/${type}`));
  }

  return (
    <>
      <button className='open-button' onClick={onAdvanceButtonClick}>
        {panelOpened ? '↑ Hide types' : '↓ Show types for search'}
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
