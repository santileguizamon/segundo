import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export async function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Error');
  }
  return user;
}


export async function register(name, email, password, role = 'user') {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some((u) => u.email === email)) {
    throw new Error('Este email ya tiene una cuenta');
  }
  const newUser = { id: Date.now(), name, email, password, role };
  localStorage.setItem('users', JSON.stringify([...users, newUser]));
  return newUser;
}

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const authenticatedUser = await login(email, password);
      setUser(authenticatedUser);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (name, email, password, rol) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await register(name, email, password, rol);
      setUser(newUser);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, handleLogin, handleRegister, loading, error };
}