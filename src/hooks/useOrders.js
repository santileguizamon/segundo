import { useState } from 'react';

export function createOrder(user, cart, total) {
  const newOrder = {
    id: Date.now(),
    userId: user.id,
    products: cart,
    total,
    status: 'pendiente',
    createdAt: new Date(),
  };
  
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));

  return newOrder;
}

export function getOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  return orders;
}

export function useOrders() {
  const [orders, setOrders] = useState(getOrders());

  const handleCreateOrder = (user, cart, total) => {
    const newOrder = createOrder(user, cart, total);
    setOrders([...orders, newOrder]);
  };

  return { orders, handleCreateOrder };
}