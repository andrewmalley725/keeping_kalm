import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import Info from './components/info';
import Navmain from './components/nav';
import {
  HashRouter, 
  Route,
  Routes
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navmain/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="info/:prod" element={<Info/>}/>
      </Routes>
    </HashRouter>
  </div>
);


