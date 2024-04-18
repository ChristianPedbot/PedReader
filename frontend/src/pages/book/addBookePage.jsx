
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddBook from './AddBook.jsx';


function AddBookPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Erro ao buscar autores:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <Navbar />
      <AddBook authors={authors} />
      <Footer />
    </div>
  );
}



export default function AddingBook() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book/add" element={<AddBookPage />} />
      </Routes>

    </BrowserRouter>
  );
}


