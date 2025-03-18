// src/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = ({ cart, setCart }) => {
  return (
    <div>
      <Navbar cart={cart} />
      <div className="container mx-auto p-4">
        {/* Provide cart state to child routes via Outlet context */}
        <Outlet context={{ cart, setCart }} />
      </div>
    </div>
  );
};

export default MainLayout;
