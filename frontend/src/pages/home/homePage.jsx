import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import App from '../../components/navbar/Navbar.jsx';
import Carousel from './Carousel.jsx';
import Evaluated from './ Evaluated.jsx';
import Genres from './Genres.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ProtectedRoute from '../book/ProtectedRoute.jsx';

function HomePage() {
  return (
    <div>
      <App />
      <Carousel />
      <Genres />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}
