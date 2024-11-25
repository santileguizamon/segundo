import { useContext, useState } from 'react';
import { StockContext } from '../context/StockContext';


export async function addProduct(product) {
  const stock = JSON.parse(localStorage.getItem('stock')) || [];
  stock.push(product);
  localStorage.setItem('stock', JSON.stringify(stock));
  return product;
}


export async function updateProduct(id, updatedProduct) {
  const stock = JSON.parse(localStorage.getItem('stock')) || [];
  const index = stock.findIndex((p) => p.id === id);
  
  if (index === -1) {
    throw new Error('Producto no encontrado');
  }
  
  stock[index] = { ...stock[index], ...updatedProduct };
  localStorage.setItem('stock', JSON.stringify(stock));
  return stock[index];
}


export async function deleteProduct(id) {
  let stock = JSON.parse(localStorage.getItem('stock')) || [];
  const index = stock.findIndex((p) => p.id === id);
  
  if (index === -1) {
    throw new Error('Producto no encontrado');
  }
  
  stock = stock.filter((p) => p.id !== id);
  localStorage.setItem('stock', JSON.stringify(stock));
  return id;
}

export function useOrders() {
  const { orders, setOrders } = useContext(OrdersContext);

  const updateOrderStatus = async (orderId, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return { orders, updateOrderStatus };
}

export async function updateStockQuantity(id, quantity) {
  const stock = JSON.parse(localStorage.getItem('stock')) || [];
  const index = stock.findIndex((p) => p.id === id);

  if (index === -1) {
    throw new Error('Producto no encontrado');
  }
  
  stock[index].quantity = quantity;
  localStorage.setItem('stock', JSON.stringify(stock));
  return stock[index];
}

export function useStock() {
  const { stock, setStock } = useContext(StockContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddProduct = async (product) => {
    setLoading(true);
    setError(null);
    try {
      const addedProduct = await addProduct(product);
      setStock((prevStock) => [...prevStock, addedProduct]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await updateProduct(id, updatedProduct);
      setStock((prevStock) =>
        prevStock.map((item) => (item.id === id ? updated : item))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteProduct(id);
      setStock((prevStock) => prevStock.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStockQuantity = async (id, quantity) => {
    setLoading(true);
    setError(null);
    try {
      const updatedProduct = await updateStockQuantity(id, quantity);
      setStock((prevStock) =>
        prevStock.map((item) => (item.id === id ? updatedProduct : item))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  

  return {
    stock,
    loading,
    error,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleUpdateStockQuantity,
  };
}