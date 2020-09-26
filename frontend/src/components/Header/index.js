import React from 'react';

import ButtonModal from '../ButtonModal';
import LoginModal from '../LoginModal';

import logo from '../../assets/coffee-logo1.svg';

import './style.css';

export default function Header() {
  return (
    <header className="menu">
      <img className="menu_logo" src={logo} alt="Coffee&Code" />
      <nav className="menu_items">
        <ButtonModal />
      </nav>
      <LoginModal />
    </header>
  );
}
