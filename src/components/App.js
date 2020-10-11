import React from 'react';
import { AppName } from '../config/appConfig'
import Login from './Login'

/**
 * Root Application Component 
 */
function App() {
  return (
    <div className="app">
      <header>
        <h1>{AppName}</h1>
      </header>
      <main>
        <Login /> 
      </main>
    </div>
  );
}

export default App;
