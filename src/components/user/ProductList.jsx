import React, { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/products';

export default function ProductList() {
  const { fetchProducts } = useProducts();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        setError('Error loading products.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [fetchProducts]);

  if (loading) {
    return <p className="text-center text-blue-500">Cargando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Nuestras prendas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition duration-200 p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 text-blue-600 font-semibold">${product.price}</p>
            <button
              className="bg-blue-500 text-white mt-4 w-full py-2 rounded hover:bg-blue-600 transition"
              onClick={() => console.log(`Adding product: ${product.id}`)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
