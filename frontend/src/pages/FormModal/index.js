import React, { useState } from 'react';
import {BsXSquare} from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message';

import api from '../../services/api';
import './style.css';

export default function FormModal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    // Form submit method
    async function handleSubmit(event) {
        event.preventDefault();

            // Requesting API
        try {
              const response = await api.post('/sessions', { name, email, password });

        } catch(err) {
        
            alert ('Erreur! Reesayez');
        } 
    }

      // Changes name's input value
      function handleNameChange(event) {
        setName(event.target.value);
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
      <div className="content"   
      style={{
        transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0'
    }}
    >
    <BsXSquare className="close_modal" onClick={props.invisible}/>
    
        <form action="/dashboard" className="content_form" autoComplete="off" onSubmit={handleSubmit}>
          <label className="content_label" htmlFor="name">NOM</label>
          <input className="input_element"
          type="text" 
          id="name" 
          placeholder="Votre nom" 
          required
          value={ name }
          onChange={handleNameChange}
          />
          <label className="content_label" htmlFor="email">E-MAIL</label>
          <input className="input_element"
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          required
          value={ email }
          onChange={handleEmailChange}
          />
          <label className="content_label" htmlFor="password">MOT DE PASSE</label>
          <input className="input_element"
          type="password" 
          id="password" 
          placeholder="Votre mot de passe"
          required 
          value={ password }
          onChange={handlePasswordChange}
          />
          <Button 
            className="submit_button" 
            type="submit" 
            variant="success">Validez</Button>
        </form>
    </div>
    );
}