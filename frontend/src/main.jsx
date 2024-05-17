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
import AddingBook from './pages/book/addBookePage.jsx';
import ShowUser from './pages/user/userPage.jsx';
import AppBookPage from './pages/showBooks/showBooksPage.jsx';
import AuthorApp from './pages/author/authorPage.jsx';
import ShowAuthor from './pages/author/showAuthorPage.jsx';
import ShowEditBook from './pages/book/editBookPage.jsx';
import IndexApp from './pages/home/indexPage.jsx';
import AppBookByGenre from './pages/home/bookByGenres.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IndexApp />
    <Home />
    <AppBookByGenre />
    <AppBookPage />
    <ShowBook />
    <AuthorApp />
    <ShowAuthor />
    <AddingBook />
    <ShowEditBook />
    <ShowUser />
    <ToastContainer />
  </React.StrictMode>
)
