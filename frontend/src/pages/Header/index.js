import React from 'react';

import './style.css';
import logo from '../../Assets/coffee-logo1.svg';

function Header() {
  return (
    <header className="menu">
        <img className="menu_logo" src={logo} alt="Coffee&Code"/>
          <nav className="menu_items">
            <ul className="menu_list">
              <li>Trouver un café</li>
              <li>Se connecter</li>
            </ul>
          </nav>
    </header>
  );
}

export default Header;