import React, { useState } from 'react';
import {BsXSquare} from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import FlashMessage from 'react-flash-message';

/**
 * Local import
 */
import api from '../../services/api';
import './style.css';

export default function FormModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    // Form submit method
    async function handleSubmit(event) {
        event.preventDefault();

        // Requesting API
        try {
          const response = await api.post('/login', { email, password });
          
          console.log(response);
    
        } catch(err) {
          console.log('Erreur');

        } 
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
        <form className="content_form" autoComplete="off" onSubmit={handleSubmit}>
          <label className="content_label" htmlFor="email">E-MAIL</label>
          <input className="input_element"
          type="email" 
          placeholder="Votre e-mail" 
          required
          value={ email }
          onChange={handleEmailChange}
          />
          <label className="content_label" htmlFor="password">MOT DE PASSE</label>
          <input className="input_element"
          type="password" 
          placeholder="Votre mot de passe"
          required 
          value={ password }
          onChange={handlePasswordChange}
          />
          <Link to="/dashboard">
            <Button
              className="submit_button" 
              type="submit" 
              variant="success">Validez
            </Button>  
          </Link>
        </form>
    </div>
    );
}