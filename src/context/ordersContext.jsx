import { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // Lista de pedidos

  const addOrder = (order) => {
    setOrders([...orders, order]); // Agregar un nuevo pedido
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders); // Actualizar el estado de un pedido
  };

  const getUserOrders = (userId) => {
    return orders.filter((order) => order.userId === userId); // Filtrar pedidos por usuario
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrderStatus, getUserOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};