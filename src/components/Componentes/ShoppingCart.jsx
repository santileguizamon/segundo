import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, handleRemoveFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0); 
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Tu carrito</h2>
      {cart.length === 0 ? (
        <p className="text-xl text-gray-500">Tu carrito esta vacio</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-4 border rounded-lg shadow-sm hover:shadow-md">
                <div>
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-lg text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total: ${total}</h3>
            <Link
              to="/checkout"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Pagar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;