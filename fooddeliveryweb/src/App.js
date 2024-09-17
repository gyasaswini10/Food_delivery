import React from 'react';
import logo from './logo.svg';
import './App.css';
import foodgif from './Components/Food.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foodgif} className="App-logo" alt="logo" />
        <p>
          Welcome <code>to our food delivery </code> website
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Explore Our web site
        </a>
      </header>
    </div>
  );
}

export default App;
