import { Landmark, Briefcase, DollarSign, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvestorCardProps {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  investmentRange: string;
  preferredSectors: string[];
  location: string;
  totalInvestments?: number;
}

const InvestorCard = ({
  id,
  name,
  avatar,
  bio,
  investmentRange,
  preferredSectors,
  location,
  totalInvestments,
}: InvestorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt={`${name} avatar`} className="h-10 w-10 rounded-full" />
            ) : (
              <Landmark className="h-6 w-6 text-blue-600" />
            )}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Globe className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
        </div>
        
        <p className="mt-3 text-gray-600 line-clamp-3">{bio}</p>
        
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
            <span>Investment Range: {investmentRange}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Briefcase className="h-4 w-4 mr-1 text-blue-600" />
            <span>Sectors: </span>
            <div className="ml-1 flex flex-wrap">
              {preferredSectors.map((sector, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mr-1 mb-1">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          {totalInvestments && (
            <span className="text-sm text-gray-500">{totalInvestments} investments</span>
          )}
          <Link
            to={`/investors/${id}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View Profile
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;