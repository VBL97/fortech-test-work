import React from 'react';
import TypesFilter from '../Types-filter/types-filter';
import SearchPanel from '../Search-panel/Search-panel';
import './Actions-panel.css';

export default function ActionsPanel() {
  return (
    <div className="actions-panel">
      <SearchPanel />
      <TypesFilter />
    </div>
  );
}
