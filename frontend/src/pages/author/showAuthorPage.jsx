import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Author from '../author/Author.jsx';

function ShowAuthorPage() {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
  
    useEffect(() => {
      const fetchAuthor = async () => {
        try {
          const authorResponse = await axios.get(`http://localhost:3000/authors/${id}`);
          setAuthor(authorResponse.data);
        } catch (error) {
          console.error('Erro ao buscar autor:', error);
        }
      };
  
      fetchAuthor();
    }, [id]);
  
    return (
        <div>
          <Navbar />
          <Author author={author} />
          <Footer />
        </div>
    );
  }
  
  
  function ShowAuthor() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/authors/:id" element={<ShowAuthorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default ShowAuthor;
