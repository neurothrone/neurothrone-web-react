import React from 'react';

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import HomePage from "./home/HomePage";
import PortfolioPage from "./portfolio/PortfolioPage";
import NotFoundPage from "./shared/NotFoundPage";
import CVPage from "./cv/CVPage";
import ContactPage from "./contact/ContactPage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <Router>
      <header>
        <NavLink to="/">
          <span>Neurothrone</span>
        </NavLink>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <NavLink to="/Contact">
          <span>Contact</span>
        </NavLink>
        <NavLink to="/CV">
          <span>CV</span>
        </NavLink>
        <NavLink to="/portfolio">
          <span>Portfolio</span>
        </NavLink>
      </header>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/cv" element={<CVPage/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
