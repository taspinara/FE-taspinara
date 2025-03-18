// src/pages/Cart.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const Cart = () => {
  // Access cart and setCart from Outlet context
  const { cart, setCart } = useOutletContext();

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Handlers
  const handleAdd = (product) => {
    setCart((prevCart) => addItemToCart(prevCart, product));
  };

  const handleRemove = (product) => {
    setCart((prevCart) => removeItemFromCart(prevCart, product.id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Line Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRemove(item)}
                        className="btn btn-warning btn-sm"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleAdd(item)}
                        className="btn btn-primary btn-sm"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="font-bold text-right">
                  Total:
                </td>
                <td colSpan="2" className="font-bold">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
