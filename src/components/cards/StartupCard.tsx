import { Building2, Tag, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StartupCardProps {
  id: string;
  name: string;
  logo?: string;
  description: string;
  industry: string;
  fundingStage: string;
  location: string;
  teamSize: number;
}

const StartupCard = ({
  id,
  name,
  logo,
  description,
  industry,
  fundingStage,
  location,
  teamSize,
}: StartupCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            {logo ? (
              <img src={logo} alt={`${name} logo`} className="h-10 w-10 rounded-full" />
            ) : (
              <Building2 className="h-6 w-6 text-blue-600" />
            )}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Tag className="h-4 w-4 mr-1" />
              {industry}
            </div>
          </div>
        </div>
        
        <p className="mt-3 text-gray-600 line-clamp-3">{description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center text-sm text-gray-500">
            <TrendingUp className="h-4 w-4 mr-1 text-blue-600" />
            <span>{fundingStage}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1 text-blue-600" />
            <span>{teamSize} team members</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">{location}</span>
          <Link
            to={`/startups/${id}`}
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

export default StartupCard;