import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import foodgif from './Components/Food.gif';

function App() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Set a timeout for the redirect
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // If redirect is true, navigate to /main
  if (redirect) {
    return <Navigate to="/main" />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={foodgif} className="App-logo" alt="food gif" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button onClick={() => setRedirect(true)}>Skip and Go to Main</button>
      </header>
    </div>
  );
}

export default App;
