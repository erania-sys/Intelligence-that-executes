import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HowWeWork from './pages/HowWeWork';
import Solutions from './pages/Solutions';
import BrandDesign from './pages/BrandDesign';
import Intelligence from './pages/Intelligence';
import Insights from './pages/Insights';
import BlogArticle from './pages/BlogArticle';
import About from './pages/About';
import Contact from './pages/Contact';

// Noise Overlay Component
const NoiseOverlay = () => (
  <div className="noise-overlay" aria-hidden="true" />
);

function App() {
  return (
    <div className="App min-h-screen bg-[#FAFAF8] text-[#2C2C2C]">
      <BrowserRouter>
        <NoiseOverlay />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/brand-design" element={<BrandDesign />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<BlogArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
