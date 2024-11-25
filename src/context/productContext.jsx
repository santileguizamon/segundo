import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Lista de productos

  const addProduct = (product) => {
    setProducts([...products, product]); // Agregar un nuevo producto
  };

  const updateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts); // Actualizar un producto
  };

  const deleteProduct = (productId) => {
    const filteredProducts = products.filter((product) => product.id !== productId);
    setProducts(filteredProducts); // Eliminar un producto
  };

  const getProductById = (productId) => {
    return products.find((product) => product.id === productId); // Obtener un producto por ID
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct, getProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};