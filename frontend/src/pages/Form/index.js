import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import api from '../../services/api';
/*import './style.css';*/

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Form submit method
    async function handleSubmit(event) {
        event.preventDefault();

        // Requesting API
        const response = await api.post('/sessions', { email, password });

        console.log(response);
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
        
        <form className="content_form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL</label>
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
          placeholder="Votre mot de passe" 
          value={ password }
          onChange={handlePasswordChange}
          />
          <Button type="submit" variant="dark">Validez</Button>
          {/*<a href="">Créez votre compte gratuitement pour commencer à profiter des événements Code & Coffee!</a>*/}
        </form>
    </div>
    );
}