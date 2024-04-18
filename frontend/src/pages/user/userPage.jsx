import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import User from '../user/User.jsx';


function Users() {
  return (
    <div>
    <Navbar />
    <User />
    <Footer />
    </div>
  );
}


export default function ShowUser() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<Users />} />
      </Routes>

    </BrowserRouter>
  );
}
