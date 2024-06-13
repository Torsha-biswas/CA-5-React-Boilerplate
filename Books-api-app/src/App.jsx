import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <div className="logo">Kalvium Books</div>
        <Link to="/" className="nav-link"><HomeIcon /> Home</Link>
        <Link to="/register" className="nav-link"><PersonAddIcon /> Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
