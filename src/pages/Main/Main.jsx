import React from 'react';
import ActionPanel from '../../components/Action-panel/Actition-panel';
import List from '../../components/List/List';
import './Main.css';

export default function Main() {
  return (
    <div className='main'>
      <ActionPanel />
      <List />
    </div>
  );
}
