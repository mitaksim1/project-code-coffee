import React from 'react';

import './App.css';

import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Form from './pages/Form';

// Imports dans l'application
import logo from './Assets/code-and-coffee-logo.svg';

function App() {

  return (
    <div className="container">
      <Header 
      logo={logo}
      />
      <Home />
      {/*<Form />   */}
  </div>   
  );
}

export default App;
