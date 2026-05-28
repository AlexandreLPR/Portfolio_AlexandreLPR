import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import DotGrid from './components/DotGrid';
import ScrollToTop from './components/ScrollToTop';
import './App.css'; // Ton CSS perso

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100 text-white" style={{ position: 'relative' }}>
        <DotGrid />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;