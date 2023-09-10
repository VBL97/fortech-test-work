import React, { useEffect } from 'react';
import './List.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectPokemons, selectPokemonsData, setPokemonsData } from '../../store/reducers/pokemons';
import Card from '../Card/Card';

export default function List() {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);
  const pokemonsData = useSelector(selectPokemonsData);

  console.log(pokemonsData);

  useEffect(() => {
    if (pokemons === undefined) {
      return;
    }
    Promise.all(
      pokemons.results.map((el) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${el.name}`).then((response) =>
          response.json(),
        );
      }),
    )
      .then((data) => dispatch(setPokemonsData(data)))
      .catch((error) => console.error(error));
  }, [dispatch, pokemons]);

  return (
    <div className='list'>
      <div className='list_pagination-count'></div>
      {/* Need to be refactored */}
      <ul className='list_content'>
        {pokemonsData?.map((pokemon) => (
          <Card
            name={pokemon.name}
            avatar={pokemon.sprites.front_default}
            type={pokemon.types.map((type) => {
              return type.type.name;
            })}
            hp={pokemon.stats.find((el) => el.stat.name === 'hp').base_stat}
            attack={pokemon.stats.find((el) => el.stat.name === 'attack').base_stat}
            defense={pokemon.stats.find((el) => el.stat.name === 'defense').base_stat}
            key={pokemon.id}
          />
        ))}
      </ul>
      <div className='list-pagination'></div>
    </div>
  );
}
