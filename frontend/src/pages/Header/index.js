import React from 'react';

import './style.css';
import logo from '../../Assets/coffee-logo1.svg';
import ButtonModal from '../ButtonModal';
import LoginModal from '../LoginModal';

function Header() {
  return (
    <header className="menu">
        <img className="menu_logo" src={logo} alt="Coffee&Code"/>
          <nav className="menu_items">
            <ButtonModal />
          </nav>
          <LoginModal />
    </header>
  );
}

export default Header;