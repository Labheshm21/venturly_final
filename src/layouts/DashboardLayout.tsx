// src/layouts/DashboardLayout.tsx
import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import Sidebar from '../components/navigation/Sidebar';
import DashboardHeader from '../components/navigation/DashboardHeader';

const DashboardLayout = () => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* ← Outlet is where TransactionsPage (and other nested routes) appear */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
