import { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]); // Lista del stock por producto

  const updateStock = (productId, newQuantity) => {
    const updatedStock = stock.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    setStock(updatedStock); // Actualizar la cantidad de un producto
  };

  const reduceStock = (productId, quantityToReduce) => {
    const updatedStock = stock.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity - quantityToReduce }
        : item
    );
    setStock(updatedStock); // Reducir el stock de un producto
  };

  const getStockByProductId = (productId) => {
    const productStock = stock.find((item) => item.productId === productId);
    return productStock ? productStock.quantity : 0; // Obtener cantidad disponible
  };

  const addStockItem = (productId, quantity) => {
    setStock([...stock, { productId, quantity }]); // Agregar un nuevo producto al stock
  };

  return (
    <StockContext.Provider value={{ stock, updateStock, reduceStock, getStockByProductId, addStockItem }}>
      {children}
    </StockContext.Provider>
  );
};