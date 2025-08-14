import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(v => !v);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Venturly Logo" 
              className="h-10 w-auto mr-3"
            />
            <h1 className="text-2xl font-bold text-blue-600">Venturly</h1>
          </Link>

          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search startups, investors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Action buttons */}
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition duration-150 ease-in-out">
              INVEST IN VENTURLY
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile action buttons */}
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition duration-150 ease-in-out">
                INVEST IN VENTURLY
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
