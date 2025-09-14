import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;