// components/InventoryManagement.js
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const InventoryManagement = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <div>Please sign in to access your inventory.</div>;
  }

  // Render your inventory management functionality
  return (
    <div>
      <h1>Inventory Management</h1>
      {/* Your inventory management components */}
    </div>
  );
};

export default InventoryManagement;