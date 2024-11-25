import ManageStock from '../../components/admin/ManageStock';

const ManageStockPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Control de Stock</h2>
      <ManageStock />
    </div>
  );
};

export default ManageStockPage;
