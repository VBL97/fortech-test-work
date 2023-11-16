import React from 'react';
import './Actions-panel.css';
import TypesFilter from '../Types-filter/types-filter';
import SearchPanel from '../Search-panel/Search-panel';

export default function ActionsPanel() {
  return (
    <div className='actions-panel'>
      <SearchPanel />
      <TypesFilter />
    </div>
  );
}
