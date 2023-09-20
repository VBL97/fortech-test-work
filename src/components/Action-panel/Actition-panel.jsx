import React from 'react';
import './Action-panel.css';
import ActionButton from '../Action-button/Action-button';
import pokedex from '../../img/Pokédex_logo.png';
import TypesFilter from '../Types-filter/types-filter';

export default function ActionPanel() {
  return (
    <div className='action-panel'>
      <ActionButton />
      <TypesFilter />
    </div>
  );
}
