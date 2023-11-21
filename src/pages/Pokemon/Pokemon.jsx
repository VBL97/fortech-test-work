import React from 'react';
import './Pokemon.css';
import { pokemon } from '../../mok/moke-pokemon';

export default function Pokemon() {
  console.log(pokemon);

  return (
    <div className='pokemon'>
      <div className='pokemon__data'>
        <div className='pokemon__infor-left'>
          <div className='pokemon__photos'>
            <img className='pokemon__photo' src={pokemon.sprites.front_default} alt='front-view' />
            <img className='pokemon__photo' src={pokemon.sprites.back_default} alt='back-view' />
          </div>
          <div className='pokemon__type'>
            <h3>Type:</h3>
            <p>Poison</p>
            <p>Poison</p>
          </div>
          <div className='pokemon__weeknesses'>
            <h3>Weekness:</h3>
            <p>Poison</p>
            <p>Poison</p>
          </div>
        </div>
        <div className='pokemon__infor-rigth'>
          <div className='pokemon__name'>
            <p>Dizzy</p>
            <p>#0014</p>
          </div>
          <div className='pokemon__stats'>
            <h3>Stats:</h3>
            {pokemon.stats.map((el) => {
              return <p key={el.name}>{el.stat.name.toLocaleUpperCase() + ': ' + el.base_stat}</p>;
            })}
          </div>
          <div className='pokemon__abilities'>
            <h3>Abilities:</h3>
            {pokemon.abilities.map((el) => {
              return (
                <p key={el.name}>
                  {el.ability.name.charAt(0).toUpperCase() + el.ability.name.slice(1)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className='pokemon__discription'></div>
    </div>
  );
}
