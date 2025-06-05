import { useState } from 'react';
import StartupCard from '../../components/cards/StartupCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

// Mock data for startups
const mockStartups = [
  {
    id: '1',
    name: 'TechInnovate',
    description: 'Building AI-powered solutions for healthcare providers to streamline patient care and improve outcomes.',
    industry: 'Healthcare Tech',
    fundingStage: 'Series A',
    location: 'San Francisco, CA',
    teamSize: 15,
  },
  {
    id: '2',
    name: 'GreenEarth',
    description: 'Developing sustainable agriculture technologies to increase crop yields while reducing environmental impact.',
    industry: 'AgTech',
    fundingStage: 'Seed',
    location: 'Austin, TX',
    teamSize: 8,
  },
  {
    id: '3',
    name: 'FinFlow',
    description: 'Creating blockchain-based financial services for underbanked populations in emerging markets.',
    industry: 'FinTech',
    fundingStage: 'Pre-seed',
    location: 'New York, NY',
    teamSize: 5,
  },
  {
    id: '4',
    name: 'BuildBetter',
    description: 'Revolutionizing construction project management with AR/VR visualization tools for architects and contractors.',
    industry: 'Construction Tech',
    fundingStage: 'Series B',
    location: 'Chicago, IL',
    teamSize: 32,
  },
  {
    id: '5',
    name: 'MobileHealth',
    description: 'Connecting patients with healthcare providers through a telemedicine platform focused on preventative care.',
    industry: 'Healthcare',
    fundingStage: 'Series A',
    location: 'Boston, MA',
    teamSize: 18,
  },
  {
    id: '6',
    name: 'EduLearn',
    description: 'Personalized learning platform that adapts to individual student needs using machine learning algorithms.',
    industry: 'EdTech',
    fundingStage: 'Seed',
    location: 'Seattle, WA',
    teamSize: 11,
  },
];

const industries = ['All Industries', 'Healthcare Tech', 'AgTech', 'FinTech', 'Construction Tech', 'EdTech', 'E-commerce'];
const fundingStages = ['All Stages', 'Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C+'];
const locations = ['All Locations', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Boston, MA', 'Chicago, IL', 'Seattle, WA'];

const StartupDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedStage, setSelectedStage] = useState('All Stages');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFilters, setShowFilters] = useState(false);

  // Filter startups based on search and filters
  const filteredStartups = mockStartups.filter((startup) => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'All Industries' || startup.industry === selectedIndustry;
    const matchesStage = selectedStage === 'All Stages' || startup.fundingStage === selectedStage;
    const matchesLocation = selectedLocation === 'All Locations' || startup.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesStage && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Startups</h1>
        <p className="text-lg text-gray-600">Discover innovative startups looking for investment</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        {/* Search */}
        <div className="w-full md:w-2/3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search startups by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Mobile filter button */}
        <div className="w-full md:hidden flex justify-end">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center text-gray-700 hover:bg-gray-50"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
        
        {/* Filters - desktop */}
        <div className="hidden md:flex md:w-1/3 items-center space-x-4">
          <div className="w-full">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
            >
              {fundingStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Mobile filters */}
      {showFilters && (
        <div className="md:hidden bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="mobile-industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <select
                id="mobile-industry"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="mobile-stage" className="block text-sm font-medium text-gray-700 mb-1">
                Funding Stage
              </label>
              <select
                id="mobile-stage"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                {fundingStages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="mobile-location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="mobile-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">Showing {filteredStartups.length} results</p>
      </div>
      
      {/* Startup cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <StartupCard key={startup.id} {...startup} />
        ))}
      </div>
      
      {filteredStartups.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No startups found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default StartupDirectory;