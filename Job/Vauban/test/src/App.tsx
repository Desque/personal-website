import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
