import { useOrders } from '../../hooks/useOrders';

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Orders</h2>
      {orders.length === 0 ? (
        <p className="text-xl text-gray-500">No orders found.</p>
      ) : (
        <div>
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="mb-6 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">Order ID: {order.id}</h3>
                <p>Status: <span className={`text-${order.status === 'Pending' ? 'yellow' : order.status === 'Completed' ? 'green' : 'red'}-500`}>{order.status}</span></p>
                <p>Total: ${order.total}</p>
                <p className="text-gray-700 mt-2">Products:</p>
                <ul className="list-disc pl-6">
                  {order.products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;