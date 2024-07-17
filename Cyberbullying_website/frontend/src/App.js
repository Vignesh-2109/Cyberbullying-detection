import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Predict from './components/Predict';
import TextPage from './components/TextPage';
import AudioPage from './components/AudioPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="./1.png" alt="Logo" className="navbar-logo" /> {/* Replace with the actual icon path if needed */}
          <span>Cyberbullying Detection</span>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About the Project</Link></li>
          <li><Link to="/predict">Predict</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/audio" element={<AudioPage />} />
      </Routes>
    </div>
  );
}

export default App;
