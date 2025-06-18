// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import StartupDashboard from './pages/dashboard/StartupDashboard';
import InvestorDashboard from './pages/dashboard/InvestorDashboard';
import StartupProfile from './pages/profile/StartupProfile';
import InvestorProfile from './pages/profile/InvestorProfile';
import DealRoom from './pages/dealroom/DealRoom';
import MilestoneTracker from './pages/milestones/MilestoneTracker';
import MilestoneApprovals from './pages/milestones/MilestoneApprovals';
import StartupDirectory from './pages/directory/StartupDirectory';
import InvestorDirectory from './pages/directory/InvestorDirectory';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
import TransactionsPage from './pages/transactions/TransactionsPage';
import SettingsPage from './pages/SettingsPage';
import DocumentsPage from './pages/DocumentsPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="startups" element={<StartupDirectory />} />
            <Route path="investors" element={<InvestorDirectory />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="/documents" element={<DocumentsPage/>} />
      <Route path="/settings" element={<SettingsPage/>} />
      {/* optional detail route for docs */}
    
          </Route>
          
          {/* Protected routes under /dashboard/* */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="startup" element={<StartupDashboard />} />
            <Route path="investor" element={<InvestorDashboard />} />
            <Route path="profile/startup" element={<StartupProfile />} />
            <Route path="profile/investor" element={<InvestorProfile />} />
            <Route path="dealroom/:id" element={<DealRoom />} />
            <Route path="milestones" element={<MilestoneTracker />} />
            <Route path="approvals" element={<MilestoneApprovals />} />
            {/* ← Added Transactions route */}
            <Route path="transactions" element={<TransactionsPage />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
