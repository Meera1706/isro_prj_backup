import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';              // New Home page
import Dashboard from './pages/Dashboard';
import Awareness from './pages/Awareness';
import CropAdvisor from './pages/CropAdvisor'; // Free mock

import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Home page */}
        <Route path="/" element={<Home />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Awareness page */}
        <Route path="/awareness" element={<Awareness />} />

        {/* Free mock CropAdvisor page */}
        <Route path="/crop-advisor" element={<CropAdvisor />} />
      </Routes>
    </Router>
  );
}

export default App;
