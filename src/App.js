import './App.css';
import './header.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import React from 'react';

import Works from './components/Works/Works';
import Reviews from './components/Reviews/Reviews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import ToggleTheme from './components/toggleTheme/ToggleTheme';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <ToggleTheme />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
