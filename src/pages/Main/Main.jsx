import React from 'react';
import ActionsPanel from '../../components/Actions-panel/Actitions-panel';
import List from '../../components/List/List';
import './Main.css';

export default function Main() {
  return (
    <div className='main'>
      <ActionsPanel />
      <List />
    </div>
  );
}
