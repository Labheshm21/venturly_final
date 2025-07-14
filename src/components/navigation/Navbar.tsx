import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

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
          <Link to="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Venturly</h1>
          </Link>

          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Explore Investments"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/startups" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Raise Capital
            </Link>
            <Link to="/investors" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Invest
            </Link>
            <Link to="/tokenize" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Tokenize
            </Link>

            {/* Research dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Research <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  to="/research/investor-faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Investor FAQ
                </Link>
                <Link
                  to="/research/founder-faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Founder FAQ
                </Link>
                <Link
                  to="/blogs"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blogs
                </Link>
                <Link
                  to="/referral"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Referral
                </Link>
                <Link
                  to="/newsletter"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Newsletter
                </Link>
                <Link
                  to="/career"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Career
                </Link>
              </div>
            </div>
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
                  to="/investors"
                  className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Invest In Venturly
                </Link>
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
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/startups" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Browse Startups
            </Link>
            <Link to="/investors" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Browse Investors
            </Link>
            <Link to="/tokenize" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Tokenize
            </Link>

            {/* Mobile Research */}
            <div className="px-3 py-2">
              <button className="flex w-full justify-between items-center text-gray-700 hover:text-blue-600 text-base font-medium focus:outline-none">
                Research <ChevronDown className="h-4 w-4" />
              </button>
              <div className="mt-1 space-y-1 pl-4">
                <Link to="/research/investor-faq" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md text-base">
                  Investor FAQ
                </Link>
                <Link to="/research/founder-faq" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md text-base">
                  Founder FAQ
                </Link>
                <Link to="/blogs" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md text-base">
                  Blogs
                </Link>
                <Link to="/referral" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md text-base">
                  Referral
                </Link>
                <Link to="/newsletter" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md text-base">
                  Newsletter
                </Link>
                <Link to="/career" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md text-base">
                  Career
                </Link>
              </div>
            </div>

            {isAuthenticated ? (
              <>
                <Link to={dashboardLink} onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={() => { handleLogout(); toggleMenu(); }}
                  className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/investors" onClick={toggleMenu} className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                  Invest In Venturly
                </Link>
                <Link to="/login" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
                <Link to="/register" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
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
