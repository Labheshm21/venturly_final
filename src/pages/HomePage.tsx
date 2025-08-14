import { Building2, Landmark, Users, BarChart3, MessageSquare, Shield, Star, TrendingUp, Eye, Award, Clock, Mail, ArrowRight, ChevronRight, ArrowUp, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    investmentInterest: '',
    message: ''
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setIsSubmitted(true);
      // Store the data (you can replace this with your actual storage logic)
      console.log('Waitlist signup data:', formData);
      
      // Store in localStorage for demo purposes
      const existingWaitlist = JSON.parse(localStorage.getItem('venturlyWaitlist') || '[]');
      existingWaitlist.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('venturlyWaitlist', JSON.stringify(existingWaitlist));
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          role: '',
          investmentInterest: '',
          message: ''
        });
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
      investmentInterest: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
                Your crypto. Their ideas.
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-blue-100">
                One secure platform
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                Venturly streamlines the investment process through milestone-based funding, transparent tracking, and direct communication between crypto investors and startups.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-semibold text-lg transition duration-150 ease-in-out shadow-lg flex items-center">
                  LAUNCH YOUR STARTUP
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 rounded-lg font-semibold text-lg transition duration-150 ease-in-out shadow-lg flex items-center">
                  START INVESTING
                  <ArrowUp className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md mx-auto">
                <div className="bg-white/20 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-white text-4xl">⚡</div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-white/30 rounded-full w-3/4"></div>
                  <div className="h-3 bg-white/30 rounded-full w-1/2"></div>
                  <div className="h-3 bg-white/30 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Venturly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Venturly?</h2>
            <p className="text-xl text-gray-600">Built for the modern era of venture funding</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Milestone Tracking</h3>
              <p className="text-gray-600">
                Define, track, and verify startup milestones with transparent approval processes that keep everyone aligned.
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

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started with milestone-based funding</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-blue-300 transform -translate-y-1/2 z-0"></div>
            
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative z-10">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                01
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Tokenize Your Equity</h3>
              <p className="text-gray-600 text-center">
                Convert your startup equity into blockchain-based tokens for transparent ownership distribution.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative z-10">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                02
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Set Your Milestones</h3>
              <p className="text-gray-600 text-center">
                Define clear, measurable goals that unlock funding as your startup progresses.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative z-10">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                03
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Release Funding on Progress</h3>
              <p className="text-gray-600 text-center">
                Investors release funds automatically when milestones are verified and approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We're Still Building</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our platform is under development and will be launching soon. We're working hard to bring you 
              the most innovative startup investment platform with milestone-based funding and transparent tracking.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                While we're building, join our exclusive waitlist to be among the first to experience 
                Venturly when we launch.
              </p>
              <button 
                onClick={openModal}
                className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold text-lg transition duration-150 ease-in-out shadow-md flex items-center mx-auto"
              >
                Join Our Waitlist
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WPI I3 Lab Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-16 w-16 text-blue-600 mr-6" />
              <div className="text-left">
                <h2 className="text-4xl font-bold text-gray-900">Backed by WPI I3 Lab</h2>
                <p className="text-xl text-blue-600 font-semibold">Worcester Polytechnic Institute</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Venturly is proudly incubated at the WPI Innovation and Entrepreneurship Institute (I3), 
              leveraging cutting-edge research, entrepreneurial expertise, and academic rigor to revolutionize 
              startup investing. Our partnership with WPI ensures that every feature we build is grounded in 
              solid research and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Innovations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">37</div>
                <p className="text-gray-600">Startups Supported</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-150 ease-in-out flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Join Our Waitlist</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g., Founder, Investor, Developer"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Investment Interest</label>
                    <select
                      name="investmentInterest"
                      value={formData.investmentInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select your interest</option>
                      <option value="startup-founder">Startup Founder</option>
                      <option value="angel-investor">Angel Investor</option>
                      <option value="vc-partner">VC Partner</option>
                      <option value="institutional-investor">Institutional Investor</option>
                      <option value="developer">Developer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Tell us more about your interest in Venturly..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold text-lg transition duration-150 ease-in-out shadow-md"
                  >
                    Join Waitlist
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Venturly!</h3>
                  <p className="text-gray-600 mb-4">
                    You've been added to our exclusive waitlist. We'll keep you updated on our progress and notify you 
                    as soon as we launch.
                  </p>
                  <p className="text-sm text-gray-500">
                    We will soon get back to you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;