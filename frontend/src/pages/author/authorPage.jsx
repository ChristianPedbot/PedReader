import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Author from './Author.jsx';
import EditAuthor from './EditAuthor.jsx';
import AddAuthor from './AddAuthor.jsx';


function ShowAuthorPage() {
  return (
    <div>
      <Navbar />
      <Author />
      <Footer />
    </div>
  );
}

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
  


export default function ShowAuthor() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authors" element={<ShowAuthorPage />} />
      </Routes>
      <Routes>
        <Route path="/authors/edit" element={<ShowEditAuthor />} />
      </Routes>
      <Routes>
        <Route path="/authors/add" element={<ShowAddAuthor />} />
      </Routes>
    </BrowserRouter>
  );
}
