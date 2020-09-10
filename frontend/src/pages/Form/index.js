import React from 'react';
import { Button } from 'react-bootstrap';

import './style.css';

export default function Form() {
    return (
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
    );
}