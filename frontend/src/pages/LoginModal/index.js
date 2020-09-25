import React, { useEffect, useState } from 'react';
import {BsXSquare} from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import FlashMessage from 'react-flash-message';

/**
 * Local import
 */
import api from '../../services/api';
import history from '../../history';

//import { Context } from '../../Context/AuthContext';
import './style.css';

// history : all routes receives prop history for navigation
export default function LoginModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Persisting token in header
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

    // Button onClick method
    async function handleSubmit(event) {
        event.preventDefault();   

        // Requesting API
        
        const response = await api.post('/login', { email, password });

        // Get token from response
        const { accessToken } = response.data;
     
        // Store token in localStorage
        localStorage.setItem('token', accessToken);

        // Set header to access all requests of the application
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        history.push('/dashboard');
        
        setAuthenticated(true);
          
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
    <BsXSquare className="close_modal" onClick={props.invisible}/>

        <form className="content_form" autoComplete="off">
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
          <Button onClick={handleSubmit}
          className="submit_button" 
          type="submit" 
          variant="success">Validez
          </Button>  
        </form>
    </div>
    );
}