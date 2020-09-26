import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Button } from 'react-bootstrap';

import './style.css';
import api from '../../services/api';

import logo from '../../assets/coffee-logo1.svg';
// import Header from '../Header';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  // Form submit method
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      // Requesting API
      try {
        const response = await api.post('/sessions', {
          name,
          email,
          password,
        });

        const { accessToken, user } = response.data;

        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', user._id);

        history.push('/dashboard');
      } catch (err) {
        console.log('Erreur');
      }
    },
    [name, email, password, history],
  );

  function handleMessage(event) {
    event.preventDefault();
    console.log('Compte crée avec succès!');
  }

  return (
    <>
      {/* <Header /> */}
      <div className="signup_container">
        <div className="signup_content">
          <section>
            <img className="signup_logo" src={logo} alt="Code&Coffee" />
            <h1>Inscription</h1>
            <p className="text_signup">
              Après votre inscription, vous pourrez rencontrer d'autres
              professionnels dans un des nos événements Code&Coffee
            </p>
          </section>
          <form
            className="content_form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label className="content_label" htmlFor="name">
              NOM
            </label>
            <input
              className="input_element"
              type="text"
              id="name"
              placeholder="Votre nom"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label className="content_label" htmlFor="email">
              E-MAIL
            </label>
            <input
              className="input_element"
              type="email"
              id="email"
              placeholder="Votre e-mail"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label className="content_label" htmlFor="password">
              MOT DE PASSE
            </label>
            <input
              className="input_element"
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              onClick={handleMessage}
              className="submit_button"
              type="submit"
              variant="dark"
            >
              Validez
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
