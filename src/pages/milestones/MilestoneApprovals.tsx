import { useState } from 'react';
import MilestoneItem from '../../components/milestones/MilestoneItem';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

// Mock data for milestones
const mockMilestones = [
  {
    id: '1',
    startupId: 'startup-1',
    startupName: 'TechInnovate',
    name: 'MVP Development',
    description: 'Complete the development of the minimum viable product with core features implemented. This includes user authentication, basic CRUD operations, and the main dashboard interface.',
    startDate: '2023-10-01',
    endDate: '2023-12-15',
    status: 'completed',
    fundingAmount: 50000,
    completionProof: 'https://example.com/proof1',
  },
  {
    id: '2',
    startupId: 'startup-2',
    startupName: 'GreenEarth',
    name: 'Initial Market Research',
    description: 'Conduct comprehensive market analysis of the agricultural technology sector. Identify key competitors, market size, and growth opportunities.',
    startDate: '2023-11-01',
    endDate: '2023-12-31',
    status: 'completed',
    fundingAmount: 25000,
    completionProof: 'https://example.com/proof2',
  },
  {
    id: '3',
    startupId: 'startup-3',
    startupName: 'FinFlow',
    name: 'Blockchain Integration',
    description: 'Complete the integration of blockchain technology for secure and transparent financial transactions. Implement smart contracts for automated fund disbursement.',
    startDate: '2023-09-15',
    endDate: '2024-01-15',
    status: 'completed',
    fundingAmount: 75000,
    completionProof: 'https://example.com/proof3',
  },
  {
    id: '4',
    startupId: 'startup-1',
    startupName: 'TechInnovate',
    name: 'User Acquisition Campaign',
    description: 'Launch marketing campaign to acquire first 1,000 users. Implement tracking and analytics to measure campaign effectiveness.',
    startDate: '2024-01-01',
    endDate: '2024-02-28',
    status: 'approved',
    fundingAmount: 30000,
    completionProof: 'https://example.com/proof4',
  },
];

const MilestoneApprovals = () => {
  const [milestones, setMilestones] = useState(mockMilestones);
  const [filterStatus, setFilterStatus] = useState('completed');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);
  
  // Filter milestones based on status
  const filteredMilestones = filterStatus === 'all' 
    ? milestones 
    : milestones.filter(milestone => milestone.status === filterStatus);
  
  const handleApprove = (id: string) => {
    setMilestones(milestones.map(milestone => 
      milestone.id === id ? { ...milestone, status: 'approved' } : milestone
    ));
  };
  
  const handleReject = (id: string) => {
    setMilestones(milestones.map(milestone => 
      milestone.id === id ? { ...milestone, status: 'rejected' } : milestone
    ));
  };

  const showDetails = (milestone: any) => {
    setSelectedMilestone(milestone);
    setShowDetailsModal(true);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Milestone Approvals</h1>
        <p className="text-gray-600">Review and approve completed milestones from your portfolio startups</p>
      </div>
      
      {/* Milestone summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Pending Review</h3>
            <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <Clock className="h-4 w-4 text-yellow-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">
            {milestones.filter(m => m.status === 'completed').length}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Approved</h3>
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">
            {milestones.filter(m => m.status === 'approved').length}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Rejected</h3>
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="h-4 w-4 text-red-600" />
            </div>
          </div>
          <p className="text-3xl font-bold mt-2">
            {milestones.filter(m => m.status === 'rejected').length}
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
            filterStatus === 'completed'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('completed')}
        >
          Pending Review
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
            filterStatus === 'rejected'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setFilterStatus('rejected')}
        >
          Rejected
        </button>
      </div>
      
      {/* List of milestones for approval */}
      <div className="space-y-6">
        {filteredMilestones.map((milestone) => (
          <div key={milestone.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    {milestone.startupName}
                  </div>
                  <h3 className="font-medium text-lg text-gray-900">{milestone.name}</h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${
                  milestone.status === 'completed' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : milestone.status === 'approved'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {milestone.status === 'completed' && <Clock className="h-3 w-3 mr-1" />}
                  {milestone.status === 'approved' && <CheckCircle className="h-3 w-3 mr-1" />}
                  {milestone.status === 'rejected' && <XCircle className="h-3 w-3 mr-1" />}
                  <span className="capitalize">{
                    milestone.status === 'completed' ? 'Pending Review' : milestone.status
                  }</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-2 line-clamp-2">{milestone.description}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="text-gray-700 font-medium">
                  ${milestone.fundingAmount.toLocaleString()}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => showDetails(milestone)}
                    className="px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm"
                  >
                    View Details
                  </button>
                  
                  {milestone.status === 'completed' && (
                    <>
                      <button
                        onClick={() => handleReject(milestone.id)}
                        className="px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-50 text-sm"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleApprove(milestone.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                      >
                        Approve
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredMilestones.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No milestones to review</h3>
            <p className="text-gray-600">
              {filterStatus === 'completed'
                ? "There are no pending milestones requiring your approval."
                : filterStatus === 'approved'
                ? "You haven't approved any milestones yet."
                : filterStatus === 'rejected'
                ? "You haven't rejected any milestones."
                : "There are no milestones available for review."}
            </p>
          </div>
        )}
      </div>
      
      {/* Details Modal */}
      {showDetailsModal && selectedMilestone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-900">{selectedMilestone.name}</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-1">Startup</div>
              <div className="font-medium">{selectedMilestone.startupName}</div>
            </div>
            
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-1">Description</div>
              <div className="text-gray-700">{selectedMilestone.description}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Start Date</div>
                <div className="font-medium">
                  {new Date(selectedMilestone.startDate).toLocaleDateString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">End Date</div>
                <div className="font-medium">
                  {new Date(selectedMilestone.endDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-1">Funding Amount</div>
              <div className="text-xl font-bold text-gray-900">
                ${selectedMilestone.fundingAmount.toLocaleString()}
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-1">Completion Proof</div>
              <a 
                href={selectedMilestone.completionProof} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <FileText className="h-4 w-4 mr-1" />
                View Documentation
              </a>
            </div>
            
            {selectedMilestone.status === 'completed' && (
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    handleReject(selectedMilestone.id);
                    setShowDetailsModal(false);
                  }}
                  className="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50"
                >
                  Reject
                </button>
                <button
                  onClick={() => {
                    handleApprove(selectedMilestone.id);
                    setShowDetailsModal(false);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Approve and Release Funds
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MilestoneApprovals;