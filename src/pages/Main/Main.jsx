import React from 'react';
import './Main.css';
import ActionsPanel from '../../components/Actions-panel/Actitions-panel';
import List from '../../components/List/List';

export default function Main() {
  return (
    <main className='main'>
      <ActionsPanel />
      <List />
    </main>
  );
}
