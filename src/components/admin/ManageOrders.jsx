import React, { useState, useEffect } from 'react';
import { useOrders } from '../hooks/orders';

export default function ManageOrders() {
  const { orders, updateOrderStatus, removeOrder } = useOrders();
  const [filter, setFilter] = useState('all'); 

  const filteredOrders = orders.filter((order) => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4">Ordenes</h1>

      <div className="mb-6 flex justify-between items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="all">Todas las ordenes</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Completadas</option>
        </select>
        <p className="text-sm text-gray-500">
          Mostrar {filteredOrders.length} {filter} ordenes
        </p>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="text-gray-600">No se encontraron ordenes</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left">Order ID</th>
              <th className="border border-gray-200 p-2 text-left">Cliente</th>
              <th className="border border-gray-200 p-2 text-left">Items</th>
              <th className="border border-gray-200 p-2 text-left">Total</th>
              <th className="border border-gray-200 p-2 text-left">Status</th>
              <th className="border border-gray-200 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 p-2">{order.id}</td>
                <td className="border border-gray-200 p-2">{order.customerName}</td>
                <td className="border border-gray-200 p-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="text-sm">
                      {item.name} (x{item.quantity})
                    </div>
                  ))}
                </td>
                <td className="border border-gray-200 p-2">${order.total.toFixed(2)}</td>
                <td className="border border-gray-200 p-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      order.status === 'completed'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="border border-gray-200 p-2">
                  <div className="flex gap-2">
                    {order.status === 'pending' && (
                      <button
                        onClick={() => updateOrderStatus(order.id, 'completed')}
                        className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                      >
                        Marcar como completado
                      </button>
                    )}
                    <button
                      onClick={() => removeOrder(order.id)}
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    >
                     Borrar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
