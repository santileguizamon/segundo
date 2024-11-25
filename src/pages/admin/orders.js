import ManageOrders from '../../components/admin/ManageOrders';

const ManageOrdersPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Gestion ordenes</h2>
      <ManageOrders />
    </div>
  );
};

export default ManageOrdersPage;
