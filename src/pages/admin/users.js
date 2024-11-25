import ManageUsers from '../../components/admin/ManageUsers';

const ManageUsersPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Gestion de usuarios</h2>
      <ManageUsers />
    </div>
  );
};

export default ManageUsersPage;
