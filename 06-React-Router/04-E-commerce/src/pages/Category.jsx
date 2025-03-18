import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const Category = () => {
  const { categoryName } = useParams();
  const { cart, setCart } = useOutletContext(); // if you want cart logic here
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategoryProducts();
  }, [categoryName]);

  const getQuantity = (productId) => {
    const item = cart.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAdd = (product) => {
    setCart((prevCart) => addItemToCart(prevCart, product));
  };

  const handleRemove = (product) => {
    setCart((prevCart) => removeItemFromCart(prevCart, product.id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Category: {categoryName}</h1>
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

export default Category;
