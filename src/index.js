import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import Info from './components/info';
import {
  HashRouter, 
  Route,
  Routes
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="info/:prod" element={<Info/>}/>
    </Routes>
  </HashRouter>
);


