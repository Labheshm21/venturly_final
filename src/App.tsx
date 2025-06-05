// src/App.tsx
import { useState } from 'react';
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
          </Route>
          
          {/* Protected routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="startup" element={<StartupDashboard />} />
            <Route path="investor" element={<InvestorDashboard />} />
            <Route path="profile/startup" element={<StartupProfile />} />
            <Route path="profile/investor" element={<InvestorProfile />} />
            <Route path="dealroom/:id" element={<DealRoom />} />
            <Route path="milestones" element={<MilestoneTracker />} />
            <Route path="approvals" element={<MilestoneApprovals />} />
          </Route>
          
          {/* 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
