import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const AdminIndex = () => {
  const { rol } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (rol !== 'admin') {
    
      router.push('/user/index');
    }
  }, [rol, router]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          onClick={() => router.push('/admin/users')}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Gestion usuarios</h2>
          <p className="text-gray-600">Gestionar todos los usuarios registrados</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          onClick={() => router.push('/admin/stock')}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Gestion Stock</h2>
          <p className="text-gray-600">Controlar stock</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          onClick={() => router.push('/admin/orders')}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ver ordenes</h2>
          <p className="text-gray-600">Historial de ordenes</p>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
