import React from 'react';

function Header({ logo }) {
    return (
        <header className="menu">
            <img className="menu_logo" src={logo} alt="Coffee&Code"/>
            <nav className="menu_items">
              <ul>
                <li>Trouver un café</li>
                <li>Se connecter</li>
              </ul>
            </nav>
      </header>
    );
}

export default Header;