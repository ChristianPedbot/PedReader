import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import homePage from './pages/home/homePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/homePage.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
