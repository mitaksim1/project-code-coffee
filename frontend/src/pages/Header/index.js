import React from 'react';

import './style.css';
import logo from '../../Assets/coffee-logo1.svg';
import ButtonModal from '../ButtonModal';
import FormModal from '../FormModal';

function Header(props) {
  return (
    <header className="menu">
        <img className="menu_logo" src={logo} alt="Coffee&Code"/>
          <nav className="menu_items">
            <ButtonModal />
          </nav>
          <FormModal />
    </header>
  );
}

export default Header;