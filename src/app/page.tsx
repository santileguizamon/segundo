import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LandingPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {

      if (user.role === 'admin') {
        router.push('/admin');
      } else if (user.role === 'user') {
        router.push('/user');
      }
    }
  }, [user, router]);

  const products = [
    { id: 1, name: 'Producto 1', price: '$10', img: '/placeholder1.png' },
    { id: 2, name: 'Producto 2', price: '$20', img: '/placeholder2.png' },
    { id: 3, name: 'Producto 3', price: '$30', img: '/placeholder3.png' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4 px-8 flex justify-end">
        {!user && (
          <>
            <Link href="/auth/LoginForm" className="mr-4 hover:underline">
              Iniciar Sesión
            </Link>
            <Link href="/auth/RegisterForm" className="hover:underline">
              Registrarse
            </Link>
          </>
        )}
      </header>

 
      <section className="mt-8 text-center">
        <h1 className="text-3xl font-bold mb-6">¡Bienvenido a nuestra tienda!</h1>
        <p className="text-gray-700 mb-8">Explora nuestros productos destacados.</p>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded p-4 hover:shadow-lg transition duration-300"
          >
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}