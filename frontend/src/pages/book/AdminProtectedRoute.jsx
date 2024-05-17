// src/components/routes/AdminProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../../utils/localStorage';

const ProtectedRouteAdmin = ({ element }) => {
  const [isAdminUser, setIsAdminUser] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const adminStatus = await isAdmin();
      setIsAdminUser(adminStatus);
    };
    checkAdminStatus();
  }, []);

  if (isAdminUser === null) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return isAdminUser ? element : <Navigate to="/login" replace />;
};

export default ProtectedRouteAdmin;
