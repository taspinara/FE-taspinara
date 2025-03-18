// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';

function App() {
  // Initialize cart state from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout cart={cart} setCart={setCart} />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category/:categoryName" element={<Category />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
