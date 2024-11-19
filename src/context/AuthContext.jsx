import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rol, setRol] = useState(null); // Nuevo estado para el rol del usuario
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado (por ejemplo, comprobamos el localStorage)
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
      setRol(savedUser.role); // Establecemos el rol del usuario
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setRole(userData.role); // Establecemos el rol del usuario
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData)); // Guardar en localStorage
    router.push(userData.role === 'admin' ? '/admin/index' : '/user/index'); // Redirigir según el rol
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    router.push('/auth/login'); // Redirigir al login al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};