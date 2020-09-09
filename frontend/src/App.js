import React from 'react';
import { Button } from 'react-bootstrap';

import './App.css';

// Imports dans l'application
import logo from './Assets/coffee-logo2.png';

function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Coffee&Code"/>

      <div className="content">
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées</p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          />
          <Button variant="dark">Validez</Button>
        </form>
    </div>
  </div>   
  );
}

export default App;
