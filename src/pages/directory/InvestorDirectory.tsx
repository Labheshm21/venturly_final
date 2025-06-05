import { useState } from 'react';
import InvestorCard from '../../components/cards/InvestorCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

// Mock data for investors
const mockInvestors = [
  {
    id: '1',
    name: 'Tech Ventures Capital',
    bio: 'Early-stage venture capital firm focused on backing exceptional founders in the software and healthcare sectors.',
    investmentRange: '$500K - $3M',
    preferredSectors: ['SaaS', 'HealthTech', 'AI'],
    location: 'San Francisco, CA',
    totalInvestments: 47,
  },
  {
    id: '2',
    name: 'Green Future Fund',
    bio: 'Impact investment fund supporting startups that address climate change and environmental sustainability.',
    investmentRange: '$250K - $1M',
    preferredSectors: ['CleanTech', 'Sustainability', 'AgTech'],
    location: 'Portland, OR',
    totalInvestments: 23,
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    bio: 'Angel investor with background in fintech. Looking for innovative solutions in financial services and blockchain.',
    investmentRange: '$50K - $200K',
    preferredSectors: ['FinTech', 'Blockchain', 'InsurTech'],
    location: 'New York, NY',
    totalInvestments: 12,
  },
  {
    id: '4',
    name: 'Tomorrow\'s Growth Partners',
    bio: 'Seed-stage fund providing capital and hands-on support to founders building the future of work, education, and healthcare.',
    investmentRange: '$1M - $5M',
    preferredSectors: ['EdTech', 'FutureTech', 'Remote Work'],
    location: 'Austin, TX',
    totalInvestments: 31,
  },
  {
    id: '5',
    name: 'Maria Chen',
    bio: 'Experienced entrepreneur turned angel investor. Passionate about consumer tech and marketplaces.',
    investmentRange: '$25K - $100K',
    preferredSectors: ['Consumer', 'Marketplace', 'Mobile'],
    location: 'Los Angeles, CA',
    totalInvestments: 8,
  },
  {
    id: '6',
    name: 'Innovation Capital Group',
    bio: 'Multi-stage venture firm backing transformative technology companies across various sectors.',
    investmentRange: '$2M - $10M',
    preferredSectors: ['Enterprise', 'Data', 'Security'],
    location: 'Boston, MA',
    totalInvestments: 65,
  },
];

const sectors = [
  'All Sectors', 'SaaS', 'HealthTech', 'AI', 'CleanTech', 'FinTech', 
  'EdTech', 'Consumer', 'Enterprise', 'Blockchain', 'Mobile'
];
const investmentRanges = [
  'All Ranges', 'Under $100K', '$100K - $500K', '$500K - $2M', '$2M - $5M', '$5M+'
];
const investorTypes = ['All Types', 'Angel', 'VC Firm', 'Corporate VC', 'Family Office'];

const InvestorDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedRange, setSelectedRange] = useState('All Ranges');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showFilters, setShowFilters] = useState(false);

  // Filter investors based on search and filters
  const filteredInvestors = mockInvestors.filter((investor) => {
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          investor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSector = selectedSector === 'All Sectors' || 
                          investor.preferredSectors.some(sector => sector.includes(selectedSector));
    
    // Simplified filtering for demo purposes
    const matchesRange = selectedRange === 'All Ranges';
    const matchesType = selectedType === 'All Types';
    
    return matchesSearch && matchesSector && matchesRange && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Investors</h1>
        <p className="text-lg text-gray-600">Connect with investors interested in funding startups like yours</p>
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
              placeholder="Search investors by name or description..."
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
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
            >
              {sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <select
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
            >
              {investmentRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
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
              <label htmlFor="mobile-sector" className="block text-sm font-medium text-gray-700 mb-1">
                Sector
              </label>
              <select
                id="mobile-sector"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="mobile-range" className="block text-sm font-medium text-gray-700 mb-1">
                Investment Range
              </label>
              <select
                id="mobile-range"
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                {investmentRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="mobile-type" className="block text-sm font-medium text-gray-700 mb-1">
                Investor Type
              </label>
              <select
                id="mobile-type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                {investorTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">Showing {filteredInvestors.length} results</p>
      </div>
      
      {/* Investor cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInvestors.map((investor) => (
          <InvestorCard key={investor.id} {...investor} />
        ))}
      </div>
      
      {filteredInvestors.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No investors found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default InvestorDirectory;