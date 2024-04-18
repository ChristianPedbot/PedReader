import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Book from './book.jsx';
import EditBook from './EditBook.jsx';

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookResponse = await axios.get(`http://localhost:3000/book/${id}`);
        setBook(bookResponse.data);

        const authorId = bookResponse.data.author_id;

        const authorResponse = await axios.get(`http://localhost:3000/authors/${id}`);
        setAuthor(authorResponse.data);
      } catch (error) {
        console.error('Erro ao buscar livro ou autor:', error);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Book book={book} author={author} />
      <Footer />
    </div>
  );
}

function EditBookPage() {
  return (
    <div>
      <Navbar />
      <EditBook />
      <Footer />
    </div>
  );
}

function ShowBook() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/books/:id/edit" element={<EditBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShowBook;
