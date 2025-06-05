import { useState } from 'react';
import MilestoneItem from '../../components/milestones/MilestoneItem';
import { Plus, FileText, Calendar } from 'lucide-react';

// Mock data for milestones
const mockMilestones = [
  {
    id: '1',
    name: 'MVP Development',
    description: 'Complete the development of the minimum viable product with core features implemented. This includes user authentication, basic CRUD operations, and the main dashboard interface.',
    startDate: '2023-10-01',
    endDate: '2023-12-15',
    status: 'completed',
    fundingAmount: 50000,
  },
  {
    id: '2',
    name: 'Beta Testing',
    description: 'Launch beta version to a select group of users and gather feedback. Conduct usability testing and implement critical improvements based on user feedback.',
    startDate: '2023-12-16',
    endDate: '2024-02-28',
    status: 'in_progress',
    fundingAmount: 30000,
  },
  {
    id: '3',
    name: 'Marketing Campaign',
    description: 'Develop and launch marketing campaign including social media presence, content marketing, and SEO optimization. Aim to acquire first 1,000 users.',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    status: 'pending',
    fundingAmount: 25000,
  },
  {
    id: '4',
    name: 'Market Expansion',
    description: 'Expand into secondary target markets and implement internationalization features. Translate the product into two additional languages.',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    status: 'pending',
    fundingAmount: 40000,
  },
];

const MilestoneTracker = () => {
  const [milestones, setMilestones] = useState(mockMilestones);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Filter milestones based on status
  const filteredMilestones = filterStatus === 'all' 
    ? milestones 
    : milestones.filter(milestone => milestone.status === filterStatus);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Milestone Tracker</h1>
            <p className="text-gray-600">Track and manage your startup's milestones</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Milestone
          </button>
        </div>
      </div>
      
      {/* Milestone summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Total</h3>
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <FileText className="h-4 w-4 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">{milestones.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Completed</h3>
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              <FileText className="h-4 w-4 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">
            {milestones.filter(m => m.status === 'completed' || m.status === 'approved').length}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
            <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <FileText className="h-4 w-4 text-yellow-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">
            {milestones.filter(m => m.status === 'in_progress').length}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Upcoming</h3>
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-purple-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">
            {milestones.filter(m => m.status === 'pending').length}
          </p>
        </div>
      </div>
      
      {/* Filter tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            filterStatus === 'all'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('all')}
        >
          All
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            filterStatus === 'in_progress'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('in_progress')}
        >
          In Progress
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            filterStatus === 'completed'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('completed')}
        >
          Completed
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            filterStatus === 'approved'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('approved')}
        >
          Approved
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            filterStatus === 'pending'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('pending')}
        >
          Upcoming
        </button>
      </div>
      
      {/* Milestones list */}
      <div>
        {filteredMilestones.map((milestone) => (
          <MilestoneItem
            key={milestone.id}
            {...milestone}
          />
        ))}
        
        {filteredMilestones.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No milestones found</h3>
            <p className="text-gray-600 mb-4">
              {filterStatus === 'all'
                ? "You haven't created any milestones yet."
                : `You don't have any ${filterStatus.replace('_', ' ')} milestones.`}
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Add Your First Milestone
            </button>
          </div>
        )}
      </div>
      
      {/* Add Milestone Modal (simplified for demo) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Add New Milestone</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Milestone Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g. Product Launch"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Describe what this milestone involves..."
                ></textarea>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Funding Amount ($)
                </label>
                <input
                  type="number"
                  id="fundingAmount"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g. 25000"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // In a real app, we'd save the form data
                    setShowAddModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilestoneTracker;