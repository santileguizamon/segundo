import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/auth';
import { useCart } from '../hooks/cart';

export default function Header() {
  const { user, handleLogout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
       

        <nav className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link href="/auth/login" className="hover:underline">
                Login
              </Link>
              <Link href="/auth/register" className="hover:underline">
                Registrate
              </Link>
            </>
          ) : user.role === 'user' ? (
            <>
              <Link href="/user/index" className="hover:underline">
                Productos
              </Link>
              <Link href="/user/orders" className="hover:underline">
                Historial de ordenes
              </Link>
              <Link href="/cart" className="relative hover:underline">
                Carrito
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
            <Link href="/admin/index" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/admin/stock" className="hover:underline">
                Control Stock
              </Link>
              <Link href="/admin/orders" className="hover:underline">
                Ver ordenes
              </Link>
              <Link href="/admin/users" className="hover:underline">
                Manejo usuarios
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
