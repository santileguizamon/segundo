import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rol, setRol] = useState(null); 
  const router = useRouter();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
      setRol(savedUser.rol); 
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setRol(userData.rol); 
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    router.push(userData.role === 'admin' ? '/admin/index' : '/user/index'); 
  };

  const logout = () => {
    setUser(null);
    setRol(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    router.push('/auth/login'); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};