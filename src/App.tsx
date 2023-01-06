import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home';
import AuthPage from './routes/auth';
import TodoDetailPage from './routes/todo/[id]';
import TodoPage from './routes/todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
