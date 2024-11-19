import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const UserIndex = () => {
  const { rol } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (rol !== 'user') {
      // Si no es user, redirigir al dashboard de admin
      router.push('/admin/index');
    }
  }, [rol, router]);

  return (
    <div>
      <h1>User Home</h1>
      {/* Aquí van los componentes del usuario */}
    </div>
  );
};

export default UserIndex;