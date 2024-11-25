import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import ProductList from '../../components/user/ProductList'; 

const UserIndex = () => {
  const { rol } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (rol !== 'user') {
      router.push('/admin/index');
    }
  }, [rol, router]);

 

const UserPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Nuestros productos</h2>
      <ProductList /> 
    </div>
  );
}

}

export default UserIndex;
