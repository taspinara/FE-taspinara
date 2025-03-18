// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const Home = () => {
  // Access cart and setCart from Outlet context
  const { cart, setCart } = useOutletContext();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch categories (optional)
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  // Helper to get quantity from the cart
  const getQuantity = (productId) => {
    const item = cart.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  // Handlers
  const handleAdd = (product) => {
    // Use setCart so React re-renders
    setCart((prevCart) => addItemToCart(prevCart, product));
  };

  const handleRemove = (product) => {
    setCart((prevCart) => removeItemFromCart(prevCart, product.id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Home</h1>

      {/* Optional: Show categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Categories</h2>
        <div className="flex gap-4">
          {categories.map((cat) => (
            <Link key={cat} to={`/category/${cat}`} className="btn btn-outline">
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Display products as cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const quantity = getQuantity(product.id);

          return (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain p-4"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className="card-actions justify-between items-center">
                  {/* Example: link to category */}
                  <Link to={`/category/${product.category}`} className="btn btn-sm">
                    {product.category}
                  </Link>
                  {quantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleRemove(product)}
                        className="btn btn-warning btn-sm"
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => handleAdd(product)}
                        className="btn btn-primary btn-sm"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAdd(product)}
                      className="btn btn-primary btn-sm"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
