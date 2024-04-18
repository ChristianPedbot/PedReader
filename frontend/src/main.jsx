import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import homePage from './pages/home/homePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/homePage.jsx';
import ShowBook from './pages/book/bookPage.jsx';
import ShowAuthor from './pages/author/authorPage.jsx';
import AddingBook from './pages/book/addBookePage.jsx';
import ShowUser from './pages/user/userPage.jsx';
import AppBookPage from './pages/showBooks/showBooksPage.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <AppBookPage />
    <ShowBook />
    <ShowAuthor />
    <AddingBook />
    <ShowUser />
  </React.StrictMode>
)
