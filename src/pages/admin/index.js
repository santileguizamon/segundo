import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const AdminIndex = () => {
  const { rol } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (rol !== 'admin') {
      // Si no es admin, redirigir a la página de usuario
      router.push('/user/index');
    }
  }, [rol, router]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Aquí van los componentes de administración */}
    </div>
  );
};

export default AdminIndex;