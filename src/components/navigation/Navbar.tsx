import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, userType, logout } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(v => !v);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const dashboardLink =
    userType === 'startup' ? '/dashboard/startup' : '/dashboard/investor';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">Venturly</h1>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/startups"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Browse Startups
            </Link>
            <Link
              to="/investors"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Browse Investors
            </Link>
            <Link
              to="/faq"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Desktop auth */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to={dashboardLink}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/startups"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Browse Startups
            </Link>
            <Link
              to="/investors"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Browse Investors
            </Link>
            <Link
              to="/faq"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to={dashboardLink}
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
