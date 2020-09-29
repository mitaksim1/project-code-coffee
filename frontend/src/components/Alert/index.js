import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

import LoginModal from '../LoginModal';

import './style.css';

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert className="content_alert" show={show} variant="success">
        <Alert.Heading>Inscription réussie!</Alert.Heading>
        <p>
          Vous pouvez maintenant réserver un café pour votre événément ou
          participer à un des événements de votre choix
        </p>
      </Alert>
      <LoginModal show={show} setShow={setShow} />
    </>
  );
}
