import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { OrdersProvider } from '../context/OrdersContext';
import { ProductProvider } from '../context/ProductContext';
import { StockProvider } from '../context/StockContext';

export const metadata = {
  title: 'Mi Aplicación',
  description: 'Aplicación creada con Next.js',
};

export default function RootLayout({ children}: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-800">
        <AuthProvider>
          <CartProvider>
            <OrdersProvider>
              <ProductProvider>
                <StockProvider>
                  <Header />
                  <main className="min-h-screen">{children}</main>
                  <Footer />
                </StockProvider>
              </ProductProvider>
            </OrdersProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

