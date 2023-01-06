import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home';
import LoginPage from './routes/auth/login';
import TodoPage from './routes/todo';
import withAppProvider from './context/app/app.provider';
import SignUpPage from './routes/auth/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signUp" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default withAppProvider(App);
