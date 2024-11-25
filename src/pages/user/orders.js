
import { useState, useEffect } from 'react';
import OrderHistory from '../../components/user/OrderHistory'

const HistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Historial de compras</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No hay compras realizadas.</p>
      ) : (
        <div className="space-y-4">
         <OrderHistory /> 
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
