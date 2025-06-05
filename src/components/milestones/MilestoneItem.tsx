import { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Flag, ChevronDown, ChevronUp } from 'lucide-react';

interface MilestoneItemProps {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'approved' | 'rejected';
  fundingAmount?: number;
  isInvestor?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

const MilestoneItem = ({
  id,
  name,
  description,
  startDate,
  endDate,
  status,
  fundingAmount,
  isInvestor = false,
  onApprove,
  onReject,
}: MilestoneItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
  };

  const getStatusColor = () => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'in_progress':
        return <Flag className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white hover:shadow-md transition-shadow duration-300">
      <div 
        className={`p-4 cursor-pointer ${expanded ? 'border-b border-gray-200' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Flag className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{name}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="ml-1 capitalize">{status.replace('_', ' ')}</span>
            </div>
            {fundingAmount && (
              <div className="ml-4 text-gray-700 font-medium">
                ${fundingAmount.toLocaleString()}
              </div>
            )}
            {expanded ? <ChevronUp className="ml-2 h-5 w-5 text-gray-400" /> : <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />}
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="p-4 bg-gray-50">
          <p className="text-gray-600 mb-4">{description}</p>
          
          {isInvestor && status === 'completed' && (
            <div className="flex space-x-3 mt-4">
              <button
                onClick={() => onApprove && onApprove(id)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Approve Milestone
              </button>
              <button
                onClick={() => onReject && onReject(id)}
                className="px-4 py-2 bg-white border border-red-600 text-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Reject
              </button>
            </div>
          )}
          
          {!isInvestor && status === 'in_progress' && (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Mark as Completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MilestoneItem;