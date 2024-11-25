import React, { useState } from 'react';
import { useStock } from '../hooks/useStock';

const ManageStock = () => {
  const { stock, loading, error, handleAddProduct, handleUpdateProduct, handleDeleteProduct, handleUpdateStockQuantity } = useStock();
  
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", quantity: 0, image: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAdd = () => {
    handleAddProduct(newProduct);
    setNewProduct({ name: "", description: "", price: "", quantity: 0, image: "" });
  };

  const handleUpdate = (id) => {
    handleUpdateProduct(id, editingProduct);
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    handleDeleteProduct(id);
  };

  const handleUpdateQuantity = (id, quantity) => {
    handleUpdateStockQuantity(id, quantity);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Gestión de Stock</h2>

      {/* Formulario para agregar un nuevo producto */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Agregar Nuevo Producto</h3>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="p-2 border rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="p-2 border rounded mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="p-2 border rounded mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Cantidad en stock"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
          className="p-2 border rounded mb-4 w-full"
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className="p-2 border rounded mb-4 w-full"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
        >
          Agregar Producto
        </button>
      </div>

      {/* Tabla de productos */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Productos en Stock</h3>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nombre</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Precio</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cantidad</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 text-sm">{product.name}</td>
                <td className="px-6 py-4 text-sm">${product.price}</td>
                <td className="px-6 py-4 text-sm">{product.quantity}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleUpdate(product.id)}
                    className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleUpdateQuantity(product.id, parseInt(e.target.value))}
                    className="p-2 border rounded w-20"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ManageStock;