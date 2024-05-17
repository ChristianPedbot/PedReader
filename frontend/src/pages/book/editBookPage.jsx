import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import EditBook from './EditBook.jsx';
import ProtectedRouteAdmin from '../book/AdminProtectedRoute.jsx';

function EditBookApp() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookResponse = await axios.get(`http://localhost:3000/book/${id}`);
        setBook(bookResponse.data);

        const authorId = bookResponse.data.author_id;
        const authorResponse = await axios.get(`http://localhost:3000/authors/${authorId}`);
        setAuthor(authorResponse.data);
      } catch (error) {

      }
    };

    fetchBook();
  }, [id]);

  return (
    <div>
      <Navbar />
      <EditBook book={book} author={author} />
      <Footer />
    </div>
  );
}

function ShowEditBook() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books/:id/edit" element={<ProtectedRouteAdmin element={<EditBookApp />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShowEditBook;
