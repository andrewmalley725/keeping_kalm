import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import Info from './components/info';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/keeping_kalm",
    element: <Home/>,
  },
  {
    path: "/info/:prod",
    element: <Info/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <RouterProvider router={router}/>
  </div>
);


