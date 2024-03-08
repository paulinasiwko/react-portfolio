import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsGallery from './pages/ProjectsGallery';
import AboutMe from './pages/AboutMe';
import ProjectPage from './pages/ProjectPage';
import Skills from './pages/Skills';

function App() {

  return (
    <Router basename='/react-portfolio/'>
     {/* <Router basename='/'> */}


      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/projects" element={<ProjectsGallery/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects/:id" element={<ProjectPage />}/>
          </Routes>

      </div>
    </Router>
  );
}

export default App;
