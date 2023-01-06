import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home';
import AuthPage from './routes/auth';
import TodosPage from './routes/todos';
import TodoPage from './routes/todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todo" element={<TodosPage />} />
        <Route path="/todo/:id" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
