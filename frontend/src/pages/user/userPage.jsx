import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import User from '../user/User.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import EditUser from './EditUser.jsx';
import ProtectedRouteUser from '../book/UserProtectedRoute.jsx';

function Users() {
  return (
    <div>
      <Navbar />
      <User />
      <Footer />
    </div>
  );
}

function RegisterApp() {
  return (
    <div>
      <Navbar />
      <Register />
      <Footer />
    </div>
  );
}


function LoginApp() {
  return (
    <div>
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}


function UserEditApp() {
  return (
    <div>
      <Navbar />
      <EditUser />
      <Footer />
    </div>
  )
}

export default function ShowUser() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/user/:id" element={<ProtectedRouteUser element={<Users />} />} />
          <Route path='/user/:id/edit' element={<ProtectedRouteUser element={<UserEditApp />} />} />
          <Route path="/register" element={<RegisterApp />} />
          <Route path="/login" element={<LoginApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
