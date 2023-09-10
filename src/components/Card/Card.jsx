import React from 'react';
import './Card.css';
import mockImg from '../../img/pngaaa.com-96218.png';

// eslint-disable-next-line react/prop-types
export default function Card({ name, avatar, type, hp, attack, defense }) {
  console.log(type);
  return (
    <li className='card'>
      <h3 className='card_pokemon-name'>{name}</h3>
      <img className='card-pokemon-avatar' src={avatar} />
      <div className='card_info'>
        <p className='card_text'> Type:</p>
        <div className='card_pokemon-type'>
          {/* eslint-disable-next-line react/prop-types */}
          {type.map((el) => (
            <p className='card_pokemon-type-tag' key={el}>
              {el}
            </p>
          ))}
        </div>
        <p className='card_text'> Type:</p>
        <div className='card_pokemon-stats'>
          <p className='card_text'>HP: {hp}</p>
          <p className='card_text'>Attack: {attack}</p>
          <p className='card_text'>Defense: {defense}</p>
        </div>
      </div>
    </li>
  );
}
