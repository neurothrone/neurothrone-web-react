import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import HomePage from "./home/HomePage";
import PortfolioPage from "./portfolio/PortfolioPage";
import NotFoundPage from "./components/NotFoundPage";
import CVPage from "./cv/CVPage";
import ContactPage from "./contact/ContactPage";
import AboutPage from "./about/AboutPage";
import Header from "./components/Header";
import ProjectView from "./portfolio/ProjectView";
import CategoryView from "./portfolio/CategoryView";
import AdminPage from "./admin/AdminPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/cv" element={<CVPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}>
            <Route path=":categoryId" element={<CategoryView/>}>
              <Route path=":projectId" element={<ProjectView/>}/>
            </Route>
            <Route index element={<h3>Select a category</h3>}/>
          </Route>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>

      <footer className="container">
        &copy;{new Date().getFullYear()} | <a href="https://neurothrone.tech/">Neurothrone</a>
      </footer>
    </div>
  );
}

export default App;
