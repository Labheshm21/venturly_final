// src/components/navigation/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import {
  LayoutDashboard,
  Users,
  MessagesSquare,
  Milestone,
  ClipboardCheck,
  Settings,
  FileText,
  UserCircle,
  Building2,
  Wallet,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const { userType } = useUser();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const renderStartupLinks = () => (
    <>
      <li>
        <Link
          to="/dashboard/startup"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/startup')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/profile/startup"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/profile/startup')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <Building2 className="h-5 w-5 mr-3" />
          Company Profile
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/milestones"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/milestones')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <Milestone className="h-5 w-5 mr-3" />
          Milestones
        </Link>
      </li>
      <li>
        <Link
          to="/investors"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/investors') ? 'text-white bg-blue-600' : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <Users className="h-5 w-5 mr-3" />
          Find Investors
        </Link>
      </li>
    </>
  );

  const renderInvestorLinks = () => (
    <>
      <li>
        <Link
          to="/dashboard/investor"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/investor')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/profile/investor"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/profile/investor')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <UserCircle className="h-5 w-5 mr-3" />
          Investor Profile
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/approvals"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/approvals')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <ClipboardCheck className="h-5 w-5 mr-3" />
          Milestone Approvals
        </Link>
      </li>
      <li>
        <Link
          to="/startups"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/startups') ? 'text-white bg-blue-600' : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <Building2 className="h-5 w-5 mr-3" />
          Browse Startups
        </Link>
      </li>
    </>
  );

  const commonLinks = () => (
    <>
      <li className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Communication
      </li>
      <li>
        <Link
          to="/dashboard/dealroom/1" // Sample dealroom ID
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/dealroom')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <MessagesSquare className="h-5 w-5 mr-3" />
          Deal Room
        </Link>
      </li>

      <li className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6">
        Finance
      </li>
      <li>
        {/* Changed to /dashboard/transactions */}
        <Link
          to="/dashboard/transactions"
          className={`flex items-center px-4 py-2 rounded-md ${
            isActive('/dashboard/transactions')
              ? 'text-white bg-blue-600'
              : 'text-gray-700 hover:bg-blue-50'
          }`}
        >
          <Wallet className="h-5 w-5 mr-3" />
          Transactions
        </Link>
      </li>

      <li className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6">
        Other
      </li>
      <li>
  <Link
    to="/documents"
    className={`flex items-center px-4 py-2 rounded-md ${
      isActive('/documents')
        ? 'text-white bg-blue-600'
        : 'text-gray-700 hover:bg-blue-50'
    }`}
  >
    <FileText className="h-5 w-5 mr-3" />
    Documents
  </Link>
</li>
      <li>
  <Link
    to="/settings"
    className={`flex items-center px-4 py-2 rounded-md ${
      isActive('/settings')
        ? 'text-white bg-blue-600'
        : 'text-gray-700 hover:bg-blue-50'
    }`}
  >
    <Settings className="h-5 w-5 mr-3" />
    Settings
  </Link>
</li>
    </>
  );

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            <h1 className="text-xl font-bold text-blue-600">Venturly</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            <ul className="space-y-1">
              {userType === 'startup' ? renderStartupLinks() : renderInvestorLinks()}
              {commonLinks()}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
