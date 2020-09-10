import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import api from '../../services/api';
import './style.css';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Form submit method
    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
      }

      // Changes email's input value
      function handleEmailChange(event) {
          setEmail(event.target.value);
      }

      // Changes password's input value
      function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="content">
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées!</p>

        <form className="content_form" onSubmit={handleSubmit}>
          <label htmlFor="password">E-MAIL</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          value={ email }
          onChange={handleEmailChange}
          />
          <label htmlFor="password">PASSWORD</label>
          <input 
          type="password" 
          id="password" 
          placeholder="Votre password" 
          value={ password }
          onChange={handlePasswordChange}
          />
          <Button type="submit" variant="dark">Validez</Button>
          {/*<a href="">Créez votre compte gratuitement pour commencer à profiter des événements Code & Coffee!</a>*/}
        </form>
    </div>
    );
}