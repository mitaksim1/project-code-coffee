import React, { useState } from 'react';

import api from '../../services/api';
import ButtonModal from '../ButtonModal';
//import Modal from '../Modal';
import './style.css';

export default function FormModal(props) {
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
      <div className="content"   
      style={{
        transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0'
    }}
    >
    <button onClick={props.invisible}>X</button> 
    
        <form className="content_form" onSubmit={handleSubmit}>
          <label htmlFor="name">NOM</label>
          <input className="input_element"
          type="text" 
          id="name" 
          placeholder="Votre nom" 
          value={ email }
          onChange={handleEmailChange}
          />
          <label htmlFor="email">E-MAIL</label>
          <input className="input_element"
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          value={ email }
          onChange={handleEmailChange}
          />
          <label htmlFor="password">MOT DE PASSE</label>
          <input className="input_element"
          type="password" 
          id="password" 
          placeholder="Votre mot de passe" 
          value={ password }
          onChange={handlePasswordChange}
          />
        </form>
    </div>
    );
}