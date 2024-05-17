import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import BooksByGenres from './BooksByGenres.jsx';
import Pagination from '../showBooks/Pagination.jsx';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';


function ShowBookByGenre() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { categorie_id } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/book/categorie/${categorie_id}?page=${currentPage}`);
        setBooks(response.data);
      } catch (error) {
        toast.error('Error when searching for books:', error);
      }
    };

    fetchBooks();
  }, [currentPage, categorie_id]);

  return (
    <div>
      <Navbar />
      <BooksByGenres books={books} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default function AppBookByGenre() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books/categorie/:categorie_id" element={<ShowBookByGenre />} />
      </Routes>
    </BrowserRouter>
  )
}


