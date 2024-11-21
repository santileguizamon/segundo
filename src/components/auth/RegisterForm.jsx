import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const RegisterForm = () => {
  const { handleRegister, error, loading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('user');

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(name, email, password, role);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrado'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterForm;