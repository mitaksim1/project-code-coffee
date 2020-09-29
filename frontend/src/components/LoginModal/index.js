import React, { useEffect, useState } from 'react';
import { BsXSquare } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// import FlashMessage from 'react-flash-message';

/**
 * Local import
 */
import api from '../../services/api';

// import { Context } from '../../Context/AuthContext';
import './style.css';

// history : all routes receives prop history for navigation
export default function LoginModal({ visible, invisible }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  // Persisting token in header
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      history.push('/dashboard');

      setAuthenticated(true);
    }
    setLoading(false);
  }, [history]);

  // Button onClick method
  async function handleSubmit(event) {
    event.preventDefault();
    // Requesting API
    const response = await api.post('login', { email, password });

    // Get token from response
    const { accessToken, user } = response.data;

    // Set header to access all requests of the application
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // Store token in localStorage
    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', user._id);

    setAuthenticated(true);

    history.push('/dashboard');
  }

  return (
    <div
      className="content"
      style={{
        transform: visible ? 'translateY(0vh' : 'translateY(-100vh)',
        opacity: visible ? '1' : '0',
      }}
    >
      <BsXSquare className="close_modal" onClick={invisible} />
      <form onSubmit={handleSubmit} className="content_form" autoComplete="off">
        <label className="content_label" htmlFor="email">
          E-MAIL
        </label>
        <input
          id="email"
          className="input_element"
          type="email"
          placeholder="Votre e-mail"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className="content_label" htmlFor="password">
          MOT DE PASSE
        </label>
        <input
          id="password"
          className="input_element"
          type="password"
          placeholder="Votre mot de passe"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button className="submit_button" type="submit" variant="success">
          Validez
        </Button>
      </form>
    </div>
  );
}

LoginModal.propTypes = {
  visible: PropTypes.bool,
  invisible: PropTypes.func,
};

LoginModal.defaultProps = {
  visible: false,
  invisible: () => {},
};
