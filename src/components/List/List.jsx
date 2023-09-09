import React, { useEffect } from 'react';
import './List.css';
import { useSelector } from 'react-redux';
import { selectPokemons } from '../../store/reducers/pokemons';

export default function List() {
  const pokemons = useSelector(selectPokemons);
  let pokemonsToShow;

  // console.log(pokemons.results);

  useEffect(() => {
    if (pokemons === undefined) {
      return;
    }
    Promise.all(
      pokemons.results.map((el) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${el.name}`).then((response) =>
          response.json(),
        ); // Resolve the Promise here
      }),
    )
      .then((data) => (pokemonsToShow = data))
      .catch((error) => console.error(error)); // Handle any errors
  }, [pokemons]);

  return (
    <div className='list'>
      <div className='list_pagination-count'></div>
      <ul className='list_content'>
        {pokemonsToShow?.map((pokemon) => {
          return (
            <>
              <li>
                <p>{pokemon.name}</p>
                <p>{pokemon.name}</p>
                <p></p>
              </li>
            </>
          );
        })}
      </ul>
      <div className='list-pagination'></div>
    </div>
  );
}
