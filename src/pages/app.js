import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { OrdersProvider } from '../context/OrdersContext';
import { ProductsProvider } from '../context/ProductsContext';
import { StockProvider } from '../context/StockContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <OrdersProvider>
          <ProductsProvider>
            <StockProvider>
              <Component {...pageProps} />
            </StockProvider>
          </ProductsProvider>
        </OrdersProvider>
      </CartProvider>
    </AuthProvider>
  );
}