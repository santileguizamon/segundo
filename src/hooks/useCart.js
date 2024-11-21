import { useState, useEffect } from 'react';

export function addToCart(cart, product) {
  const updatedCart = [...cart, product];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
}

export function removeFromCart(cart, productId) {
  const updatedCart = cart.filter((product) => product.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
}

export function getCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

export function useCart() {
  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = addToCart(cart, product);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = removeFromCart(cart, productId);
    setCart(updatedCart);
  };

  return { cart, handleAddToCart, handleRemoveFromCart };
}