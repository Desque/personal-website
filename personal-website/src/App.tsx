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
import Page from "./pages/page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Page page={<Home />} pageName={'home'}/>} />
          <Route path="/bio" element={<Page page={<Biography />} pageName={'biography'}/>} />
          <Route path="/description" element={<Page page={<Description />} pageName={'description'}/>} />
          <Route path="/soft-skills" element={<Page page={<SoftSkills />} pageName={'soft-skills'}/>} />
          <Route path="/hard-skills" element={<Page page={<HardSkills />} pageName={'hard-skills'}/>} />
          <Route path="/projects" element={<Page page={<Projects />} pageName={'projects'}/>} />
          <Route path="/searching" element={<Page page={<Searching />} pageName={'searching'}/>} />
          <Route path="/contact" element={<Page page={<Contact />} pageName={'contact'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
