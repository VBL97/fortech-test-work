import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPokemonsTypes,
  setIsLoading,
  setPokemonsData,
} from "../../store/reducers/pokemons";
import { typesColors } from "../../utils/const";
import "./types-filter.css";
import Pokeapi from "../../utils/pokeapi";

export default function TypesFilter() {
  const dispatch = useDispatch();
  const pokemonsTypes = useSelector(selectPokemonsTypes);
  const [panelOpened, setPanelOpened] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  const api = new Pokeapi();

  function onAdvanceButtonClick() {
    setPanelOpened(!panelOpened);
  }

  const getNewTags = (tags, typeName) => {
    if (tags.includes(typeName)) {
      return tags.filter(tag => tag !== typeName);
    }
    return [...tags, typeName];
  };

  function onTagClick(typeName) {
    setActiveTags(prevActiveTags => {
      const newTags = getNewTags(prevActiveTags, typeName);
      if (newTags.length) {
        //тут поиск для всех типов сразу. нужно немного поправить, чтобы дозапрашивать только по одному тегу
        dispatch(setIsLoading());
        api
          .fetchPokemonsByTypes(newTags)
          .then(data => dispatch(setPokemonsData(data)));
      } else {
        //тут нужно запрашивать просто список покемонов и в идеале сбрасывать выбранную страницу
        //для этого в стор нужно текущую страницу вынести
      }
      return newTags;
    });
  }

  return (
    <>
      <button
        className="types-filter__open-button"
        onClick={onAdvanceButtonClick}
        type="button"
      >
        {panelOpened ? "↑ Hide types" : "↓ Show types for search"}
      </button>

      <div className={`types-filter ${panelOpened ? "slide-in" : "slide-out"}`}>
        {pokemonsTypes?.map(type => (
          <button
            className={`types-filter__types-tag ${
              activeTags.includes(type.name) ? "active" : ""
            }`}
            key={type.name}
            style={{
              backgroundColor: activeTags.includes(type.name)
                ? typesColors[type.name]
                : "",
            }}
            onClick={() => onTagClick(type.name)}
            type="button"
          >
            {type.name}
          </button>
        ))}
      </div>
    </>
  );
}
