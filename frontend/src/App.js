import React from 'react';
import { Button } from 'react-bootstrap';

import './App.css';
import Header from './pages/Header';

// Imports dans l'application
import logo from './Assets/code-and-coffee-logo.svg';

function App() {
  return (
    <div className="container">
      <Header logo={ logo }/>
      <div className="content">
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées!</p>

        <form className="content_form">
          <label htmlFor="email">E-MAIL</label>
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
