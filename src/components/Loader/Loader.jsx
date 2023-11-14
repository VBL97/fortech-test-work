import React from 'react';
import pokeloader from '../../img/pngaaa.com-96218.png';
import './Loader.css';

export default function Loader() {
  return <img className='loader' src={pokeloader} alt='loader' />;
}
