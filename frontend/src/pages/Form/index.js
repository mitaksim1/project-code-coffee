import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// import api from '../../services/api';
import './style.css';

export default function Form() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Hello');
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
          />
          <label htmlFor="password">PASSWORD</label>
          <input 
          type="password" 
          id="password" 
          placeholder="Votre password" 
          />
          <Button type="submit" variant="dark">Validez</Button>
          {/*<a href="">Créez votre compte gratuitement pour commencer à profiter des événements Code & Coffee!</a>*/}
        </form>
    </div>
    );
}