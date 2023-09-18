import React from 'react';
import './Card.css';
import pokeball from '../../img/question-icon.png';
import { typesColors } from '../../utils/const';

// eslint-disable-next-line react/prop-types
export default function Card({ id, name, avatar = pokeball, type, hp, attack, defense }) {
  return (
    <li className='card'>
      <div className='card_header'>
        <h3 className='card_pokemon-name'>{name}</h3>
        <b className='card_pokemon-id'>#{id}</b>
      </div>
      <img className='card-pokemon-avatar' src={avatar === null ? pokeball : avatar} />

      <div className='card_info'>
        <div className='card_pokemon-info-block'>
          <p className='card_info-heading'>Type:</p>
          <div className='card_type-list'>
            {/* eslint-disable-next-line react/prop-types */}
            {type.map((el) => (
              <p
                className='card_pokemon-type-tag'
                style={{ backgroundColor: `${typesColors[el]}` }}
                key={el}>
                {el}
              </p>
            ))}
          </div>
        </div>

        <div className='card_pokemon-info-block'>
          <p className='card_info-heading'>Stats:</p>
          <div className='card_stats-list'>
            <p className='card_text'>HP: {hp}</p>
            <p className='card_text'>Attack: {attack}</p>
            <p className='card_text'>Defense: {defense}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
