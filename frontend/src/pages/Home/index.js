import React from 'react';

import './style.css';
import ButtonModal from '../ButtonModal';
import FormModal from '../FormModal';
import Header from '../Header';


export default function Home() {
    return (
        <>
        <Header />
        <div className="text_home">
            <h1 className="title">Transformez <span>café en code!</span></h1>
            <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées!</p>
            <p>Créez votre événement Code&Coffee ou participez à un des événements déjà prévus près de chez vous sur simple inscription.</p>
            <ButtonModal />
            <FormModal />
        </div>    
        </>
    );
}