import React from 'react';

import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from './routes/home';
import LoginPage from './routes/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
