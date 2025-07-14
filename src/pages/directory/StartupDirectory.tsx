import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import StartupCard from '../../components/cards/StartupCard';

// Mock data
export const mockStartups = [
  { id: '1', name: 'TechInnovate', description: 'Building AI-powered solutions …', industry: 'Healthcare Tech', fundingStage: 'Series A', location: 'San Francisco, CA', teamSize: 15 },
  { id: '2', name: 'GreenEarth',    description: 'Developing sustainable …',        industry: 'AgTech',           fundingStage: 'Seed',    location: 'Austin, TX',         teamSize: 8 },
  // …other entries…
];

const industries = [ 'All Industries', 'Healthcare Tech', 'AgTech', /*…*/ ];
const fundingStages = [ 'All Stages', 'Pre-seed', 'Seed', /*…*/ ];
const locations = [ 'All Locations', 'San Francisco, CA', /*…*/ ];

const StartupDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedStage, setSelectedStage]       = useState('All Stages');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFilters, setShowFilters]           = useState(false);

  const filtered = mockStartups.filter(s => {
    const matchesSearch   = s.name.toLowerCase().includes(searchTerm.toLowerCase())
                          || s.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All Industries' || s.industry === selectedIndustry;
    const matchesStage    = selectedStage    === 'All Stages'      || s.fundingStage === selectedStage;
    const matchesLocation = selectedLocation === 'All Locations' || s.location === selectedLocation;
    return matchesSearch && matchesIndustry && matchesStage && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Banner */}
      <section className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/profiles/codingjunior.jpg" alt="CodingJunior" className="h-16 w-16 rounded-full" />
          <div>
            <h2 className="text-xl font-bold">CodingJunior</h2>
            <p className="text-sm text-gray-600">Wrapping up investments soon</p>
          </div>
        </div>
        <Link to="/opportunities" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          View Opportunities
        </Link>
      </section>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Browse Startups</h1>
        <p className="text-gray-600">Discover innovative startups looking for investment</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          <input
            type="text"
            placeholder="Search by name or description…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded"
          />
        </div>

        {/* Desktop filters */}
        <div className="hidden md:flex gap-2">
          <select value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)} className="px-2 py-1 border rounded">
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
          <select value={selectedStage} onChange={e => setSelectedStage(e.target.value)} className="px-2 py-1 border rounded">
            {fundingStages.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="px-2 py-1 border rounded">
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setShowFilters(!showFilters)} className="md:hidden px-2 py-1 border rounded flex items-center gap-1">
          <Filter /> Filters
        </button>
      </div>

      {/* Mobile filters panel */}
      {showFilters && (
        <div className="md:hidden bg-gray-50 p-4 rounded space-y-2">
          <select value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)} className="w-full p-1 border rounded">
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
          <select value={selectedStage} onChange={e => setSelectedStage(e.target.value)} className="w-full p-1 border rounded">
            {fundingStages.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="w-full p-1 border rounded">
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      )}

      {/* Results count */}
      <p className="text-gray-600">Showing {filtered.length} results</p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(s => (
          <Link key={s.id} to={`/startups/${s.id}`}><StartupCard {...s} /></Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg">No startups found</h3>
          <p className="text-gray-600">Try different filters.</p>
        </div>
      )}
    </div>
  );
};

export default StartupDirectory;
