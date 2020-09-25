import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Button } from 'react-bootstrap';

import './style.css';
import api from '../../services/api';
import logo from '../../Assets/coffee-logo1.svg';
//import Header from '../Header';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form submit method
  async function handleSubmit(event) {
    event.preventDefault();

    // Requesting API
    try {
      const response = await api.post('/sessions', { name, email, password });
      
      console.log(response);

    } catch(err) {
      console.log('Erreur');

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

  function handleMessage (event) {
    event.preventDefault();
    console.log('Compte crée avec succès!');
  }

  return (
    <>
    {/*<Header />*/}
    <div className="signup_container">
      <div className="signup_content">
        <section>
          <img className="signup_logo" src={logo} alt="Code&Coffee"/>
          <h1>Inscription</h1>
          <p className="text_signup">Après votre inscription, vous pourrez rencontrer d'autres professionnels dans un des nos événements Code&Coffee</p>
         
        </section>
          <form className="content_form" autoComplete="off" onSubmit={handleSubmit}>
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
          <Button onClick={handleMessage}
            className="submit_button" 
            type="submit" 
            variant="dark">Validez
          </Button>        
          </form>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="black" />
            Revenir à la page d'accueil
          </Link>
      </div>
    </div>
    </>
  );
}