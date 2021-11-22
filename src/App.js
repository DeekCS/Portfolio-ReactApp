import logo from './logo.svg';
import './App.css';
import './header.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import React, {Component} from "react";
// import Reviewss from "./components/Reviews/Revirews";
import Works from "./components/Works/Works";
import Reviews from "./components/Reviews/Reviews";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
function App() {
  return (

      <Router>
      <React.Fragment>
        <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/works' element={<Works />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
      </React.Fragment>
      </Router>
  );
}

export default App;
