import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Description from "./pages/Description";
import Studies from "./pages/Studies";
import HardSkills from "./pages/HardSkills";
import Projects from "./pages/Projects";
import Searching from "./pages/Searching";
import Contact from "./pages/Contact";
import Biography from "./pages/Biography";
import React from 'react';
import Page from "./pages/page";
import Experiences from "./pages/Experiences";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Page page={<Home />} pageName={'home'}/>} />
          <Route path="/bio" element={<Page page={<Biography />} pageName={'biography'}/>} />
          <Route path="/description" element={<Page page={<Description />} pageName={'description'}/>} />
          <Route path="/studies" element={<Page page={<Studies />} pageName={'studies'}/>} />
          <Route path="/experiences" element={<Page page={<Experiences />} pageName={'experiences'}/>} />
          <Route path="/hard-skills" element={<Page page={<HardSkills />} pageName={'hard-skills'}/>} />
          <Route path="/projects" element={<Page page={<Projects />} pageName={'projects'}/>} />
          <Route path="/searching" element={<Page page={<Searching />} pageName={'searching'}/>} />
          <Route path="/contact" element={<Page page={<Contact />} pageName={'contact'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
