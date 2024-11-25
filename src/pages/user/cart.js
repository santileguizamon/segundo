import ShoppingCart from '../../components/Componentes/ShoppingCart'; 
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login'); 
    }
  }, [user, router]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Tu carrito</h1>
      <ShoppingCart /> 
    </div>
  );
};

export default CartPage;
