
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function DocumentsPage() {
  // Placeholder data
  const documents = [
    { id: '1', title: 'Pitch Deck', updated: '2025-06-01' },
    { id: '2', title: 'Business Plan', updated: '2025-05-20' },
    { id: '3', title: 'Financial Model', updated: '2025-05-15' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Documents</h1>
      <div className="grid gap-4">
        {documents.map(doc => (
          <Link
            key={doc.id}
            to={`/documents/${doc.id}`}
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <FileText className="h-6 w-6 text-blue-500 mr-3" />
            <div>
              <p className="font-medium text-gray-900">{doc.title}</p>
              <p className="text-sm text-gray-500">Last updated: {doc.updated}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}