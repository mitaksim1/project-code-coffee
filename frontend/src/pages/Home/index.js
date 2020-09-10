import React from 'react';

import './style.css';

export default function Home() {
    return (
        <div className="text_home">
        <h1 className="title">Transformez <span>Café en code!</span></h1>
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées!</p>
        <p>Inscrivez-vous dès maintenant!</p>
        <button>Je m'inscris!</button>
    </div>
    );
}