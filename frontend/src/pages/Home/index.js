import React from 'react';
import { Button } from 'react-bootstrap';

import './style.css';

export default function Home() {
    return (
        <div className="text_home">
            <h1 className="title">Transformez <span>café en code!</span></h1>
            <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées!</p>
            <p>Créez votre événement <strong>Code&Coffee</strong> ou participez à un des événements déjà prévus près de chez vous sur simple inscription.</p>
            <Button className="signup_button" type="submit" variant="dark">Je m'inscris!</Button>
        </div>
    );
}