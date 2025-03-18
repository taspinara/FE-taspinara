// src/utils/cartUtils.js
export function addItemToCart(cart, product) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    // Increase quantity by one
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    // Add new product with quantity 1
    return [...cart, { ...product, quantity: 1 }];
  }
}

export function removeItemFromCart(cart, productId) {
  const existingItem = cart.find((item) => item.id === productId);
  if (!existingItem) return cart;

  if (existingItem.quantity === 1) {
    // Remove product if quantity is 1
    return cart.filter((item) => item.id !== productId);
  } else {
    // Decrease quantity by one
    return cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
}
