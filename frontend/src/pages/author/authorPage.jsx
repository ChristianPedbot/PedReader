import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import EditAuthor from './EditAuthor.jsx';
import AddAuthor from './AddAuthor.jsx';
import ProtectedRouteAdmin from '../book/AdminProtectedRoute.jsx';

function ShowEditAuthor() {
    return (
      <div>
        <Navbar />
        <EditAuthor />
        <Footer />
      </div>
    );
  }
  
function ShowAddAuthor() {
  return (
    <div>
      <Navbar />
      <AddAuthor />
      <Footer />
    </div>
  );
}
  
export default function AuthorApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authors/:id/edit" element={<ProtectedRouteAdmin element={<ShowEditAuthor />} />} />
      </Routes>
      <Routes>
        <Route path="/authors/add" element={<ProtectedRouteAdmin element={<ShowAddAuthor />} />} />
      </Routes>
    </BrowserRouter>
  );
}


