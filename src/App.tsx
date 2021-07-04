import React from 'react';

import Routes from './routes/routes';

import { AuthProvider } from './contexts/auth';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </div>
  );
}

export default App;
