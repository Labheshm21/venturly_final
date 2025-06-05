import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Building2, Landmark, Users, BarChart3, MessageSquare, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Connecting Startups with Investors for Mutual Growth
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Venturly streamlines the investment process through milestone-based funding, transparent tracking, and direct communication.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-md font-medium text-center transition duration-150 ease-in-out shadow-md"
                >
                  Get Started
                </Link>
                <Link
                  to="/faq"
                  className="px-6 py-3 bg-transparent border border-white text-white hover:bg-blue-700 rounded-md font-medium text-center transition duration-150 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Startup team collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering Both Sides of the Investment Equation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're raising capital or looking to invest, Venturly provides the tools you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Startups */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Startups</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Create detailed milestone plans to attract investors</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Showcase your company to a network of verified investors</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Secure milestone-based funding with automatic releases</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Communicate directly with interested investors</span>
                  </li>
                </ul>
                <Link
                  to="/register"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Get started as a startup <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* For Investors */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Landmark className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Investors</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Discover promising startups aligned with your investment criteria</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Review and approve milestone-based funding releases</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Monitor startup progress through a transparent dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span>Connect with founders directly in the deal room</span>
                  </li>
                </ul>
                <Link
                  to="/register"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Get started as an investor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform streamlines the investment process with these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Milestone Tracking</h3>
              <p className="text-gray-600">
                Define, track, and verify startup milestones with a transparent approval process that keeps everyone aligned.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deal Room</h3>
              <p className="text-gray-600">
                Communicate directly with stakeholders in a dedicated space with complete message history and timestamps.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                Automated funding releases upon milestone approval with full transaction history and digital wallet integration.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Matching Algorithm</h3>
              <p className="text-gray-600">
                Find the perfect match with our smart algorithm that connects startups to investors based on mutual criteria.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Startup Profiles</h3>
              <p className="text-gray-600">
                Comprehensive profiles including business details, team information, pitch decks, and financial projections.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Investor Profiles</h3>
              <p className="text-gray-600">
                Detailed investor information including investment preferences, past investments, and available capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Investment Experience?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join Venturly today and experience a new standard in startup investing and fundraising.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
  to="/register"
  className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-md font-medium transition duration-150 ease-in-out shadow-md"
>
  Join the Community
</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;