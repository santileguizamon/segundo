import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth"; // Asegúrate de que el hook de autenticación esté disponible

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const { fetchUsers, deleteUser, updateUserRole } = useAuth();

  // Cargar los usuarios al montar el componente
  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers(); // Supongamos que el fetchUsers es un método que obtiene los usuarios
      setUsers(usersData);
    };
    loadUsers();
  }, []);

  // Manejar la eliminación de un usuario
  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  // Manejar la actualización de rol de un usuario
  const handleRoleChange = async (id, role) => {
    await updateUserRole(id, role);
    setUsers(users.map(user => 
      user.id === id ? { ...user, role } : user
    ));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Gestión de Usuarios</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nombre</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rol</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="px-6 py-4 text-sm">{user.name}</td>
              <td className="px-6 py-4 text-sm">{user.email}</td>
              <td className="px-6 py-4 text-sm">
                <select 
                  value={user.role} 
                  onChange={(e) => handleRoleChange(user.id, e.target.value)} 
                  className="p-2 border rounded-md"
                >
                  <option value="user">Usuario</option>
                  <option value="admin">Administrador</option>
                </select>
              </td>
              <td className="px-6 py-4 text-sm">
                <button 
                  onClick={() => handleDelete(user.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;