import React from 'react';
import pokeloader from '../../img/pngaaa.com-96218.png';
import './Loader.css';

export default function Loader() {
  return (
    <div className='loader'>
      <img className='loader__image' src={pokeloader} alt='loader' />
      <p>Loading...</p>
    </div>
  );
}
