import React from 'react';
import Logo from '../../img/Pokédex_logo.png';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt='Logo' />
    </div>
  );
}
