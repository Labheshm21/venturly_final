import { formatDistanceToNow } from 'date-fns';

interface ChatMessageProps {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

const ChatMessage = ({
  senderName,
  senderAvatar,
  content,
  timestamp,
  isCurrentUser,
}: ChatMessageProps) => {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isCurrentUser && (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
          {senderAvatar ? (
            <img src={senderAvatar} alt={senderName} className="h-10 w-10 rounded-full" />
          ) : (
            <span className="text-gray-700 font-medium">
              {senderName.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      )}
      
      <div className={`max-w-xs md:max-w-md ${isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} p-3 rounded-lg`}>
        {!isCurrentUser && (
          <div className="font-medium text-sm mb-1">{senderName}</div>
        )}
        <p className="text-sm">{content}</p>
        <div className={`text-xs mt-1 ${isCurrentUser ? 'text-blue-200' : 'text-gray-500'}`}>
          {formatDistanceToNow(timestamp, { addSuffix: true })}
        </div>
      </div>
      
      {isCurrentUser && (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center ml-3">
          {senderAvatar ? (
            <img src={senderAvatar} alt={senderName} className="h-10 w-10 rounded-full" />
          ) : (
            <span className="text-blue-700 font-medium">
              {senderName.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;