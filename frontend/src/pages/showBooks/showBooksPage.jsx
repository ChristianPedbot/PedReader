import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Books from './Books.jsx';
import Search from './Search.jsx';
import Pagination from './Pagination.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function ShowBookPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Navbar />
      <Search />
      <Books books={books} />
      <Pagination />
      <Footer />
    </div>
  );
}

export default function AppBookPage() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/books" element={<ShowBookPage />} />
    </Routes>
    </BrowserRouter>
  )
}
