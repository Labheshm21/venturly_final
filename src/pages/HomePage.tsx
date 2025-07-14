import {  Building2, Landmark, Users, BarChart3, MessageSquare, Shield, Star, TrendingUp, Eye, Award } from 'lucide-react';

const HomePage = () => {
  const handleJoinVenturly = () => {
    window.location.href = './Register';
  };

  const handleExploreInvestments = () => {
    window.location.href = './Register';
  };

  const handleExplore = () => {
    const investmentSection = document.getElementById('investment-opportunities');
    if (investmentSection) {
      investmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Your crypto. Their ideas. One secure platform
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Venturly streamlines the investment process through milestone-based funding, transparent tracking, and direct communication.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={handleJoinVenturly}
                  className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-md font-medium text-center transition duration-150 ease-in-out shadow-md"
                >
                  Join Venturly
                </button>
                <button 
                  onClick={handleExplore}
                  className="px-6 py-3 bg-transparent border border-white text-white hover:bg-blue-700 rounded-md font-medium text-center transition duration-150 ease-in-out"
                >
                  Explore
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Startup team collaborating"
                className="rounded-lg shadow-xl mb-6"
              />
              <div className="text-center">
                <button className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-md font-medium transition duration-150 ease-in-out shadow-md">
                  <Eye className="inline-block mr-2 h-5 w-5" />
                  View Opportunity
                </button>
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

      {/* Investment Opportunities Section */}
      <section id="investment-opportunities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* This Week */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">This Week</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "TechFlow AI", category: "Artificial Intelligence", funding: "$250K", description: "Revolutionary AI platform for business automation" },
                { name: "GreenEnergy Solutions", category: "Clean Energy", funding: "$500K", description: "Sustainable energy solutions for urban environments" },
                { name: "HealthTech Pro", category: "Healthcare", funding: "$300K", description: "Digital health platform connecting patients and doctors" }
              ].map((startup, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{startup.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{startup.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-600">{startup.funding}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended for You */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "BlockChain Analytics", category: "Fintech", funding: "$400K", description: "Advanced blockchain data analysis platform" },
                { name: "EduTech Innovation", category: "Education", funding: "$200K", description: "AI-powered personalized learning platform" },
                { name: "AgriTech Solutions", category: "Agriculture", funding: "$350K", description: "Smart farming technology for sustainable agriculture" }
              ].map((startup, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{startup.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{startup.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-600">{startup.funding}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Funded */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Funded</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Quantum Computing Corp", category: "Technology", funding: "$2.5M", description: "Next-generation quantum computing solutions" },
                { name: "BioTech Innovations", category: "Biotechnology", funding: "$1.8M", description: "Breakthrough medical research and development" },
                { name: "Space Exploration Tech", category: "Aerospace", funding: "$3.2M", description: "Commercial space technology and satellite systems" }
              ].map((startup, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{startup.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{startup.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-600">{startup.funding}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Investments Button */}
          <div className="text-center mb-16">
            <button 
              onClick={handleExploreInvestments}
              className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition duration-150 ease-in-out shadow-md"
            >
              <TrendingUp className="inline-block mr-2 h-5 w-5" />
              Explore Investments
            </button>
          </div>
        </div>
      </section>

      {/* How to Invest Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Invest</h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Sign up and complete your investor profile with your investment preferences and criteria."
              },
              {
                step: "02",
                title: "Browse Opportunities",
                description: "Explore curated startup opportunities that match your investment interests and risk profile."
              },
              {
                step: "03",
                title: "Review & Connect",
                description: "Review detailed startup information and connect with founders through our secure deal room."
              },
              {
                step: "04",
                title: "Invest & Monitor",
                description: "Make your investment and monitor progress through milestone-based tracking and updates."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews and Feedback */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Angel Investor",
                rating: 5,
                comment: "Venturly has revolutionized how I discover and invest in startups. The milestone-based approach gives me confidence in my investments."
              },
              {
                name: "Mike Chen",
                role: "Startup Founder",
                rating: 5,
                comment: "The platform made it incredibly easy to connect with investors and showcase our progress. The funding process was seamless."
              },
              {
                name: "Emily Rodriguez",
                role: "VC Partner",
                rating: 5,
                comment: "The transparency and tracking features are outstanding. I can monitor all my portfolio companies in one place."
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubated Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Incubated at WPI I3 Lab</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venturly is proudly incubated at the WPI Innovation and Entrepreneurship Institute (I3), 
            leveraging cutting-edge research and entrepreneurial expertise to revolutionize startup investing.
          </p>
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
            <button className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-md font-medium transition duration-150 ease-in-out shadow-md">
              Join the Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;