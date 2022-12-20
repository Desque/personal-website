import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Description from "./pages/Description";
import SoftSkills from "./pages/SoftSkills";
import HardSkills from "./pages/HardSkills";
import Projects from "./pages/Projects";
import Searching from "./pages/Searching";
import Contact from "./pages/Contact";
import Biography from "./pages/Biography";
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bio" element={<Biography/>} />
          <Route path="/description" element={<Description/>} />
          <Route path="/soft-skills" element={<SoftSkills/>} />
          <Route path="/hard-skills" element={<HardSkills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/searching" element={<Searching/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
