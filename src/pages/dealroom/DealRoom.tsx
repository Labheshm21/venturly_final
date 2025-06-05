import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatMessage from '../../components/dealroom/ChatMessage';
import { Send, Paperclip, Info, Users } from 'lucide-react';

// Mock data for chat messages
const mockMessages = [
  {
    id: '1',
    senderId: 'investor-1',
    senderName: 'Alex Johnson',
    content: 'Hi, I reviewed your pitch deck and I\'m interested in learning more about your user acquisition strategy.',
    timestamp: new Date('2024-01-15T10:30:00'),
  },
  {
    id: '2',
    senderId: 'startup-1',
    senderName: 'TechInnovate',
    content: 'Thanks for your interest! We\'re currently focusing on targeted digital marketing and partnerships with healthcare providers. Our CAC is around $45 with a 3-month payback period.',
    timestamp: new Date('2024-01-15T10:35:00'),
  },
  {
    id: '3',
    senderId: 'investor-1',
    senderName: 'Alex Johnson',
    content: 'That\'s impressive. What about your retention metrics?',
    timestamp: new Date('2024-01-15T10:38:00'),
  },
  {
    id: '4',
    senderId: 'startup-1',
    senderName: 'TechInnovate',
    content: 'We\'re seeing a 78% retention rate after 3 months, which is above industry average. Our product stickiness comes from the integration with users\' daily healthcare routines.',
    timestamp: new Date('2024-01-15T10:42:00'),
  },
  {
    id: '5',
    senderId: 'investor-1',
    senderName: 'Alex Johnson',
    content: 'Great. I\'d like to discuss your milestone plan in more detail. Could we set up a call for next week?',
    timestamp: new Date('2024-01-15T10:45:00'),
  },
  {
    id: '6',
    senderId: 'startup-1',
    senderName: 'TechInnovate',
    content: 'Absolutely! How does Tuesday at 2 PM EST work for you?',
    timestamp: new Date('2024-01-15T10:47:00'),
  },
  {
    id: '7',
    senderId: 'investor-1',
    senderName: 'Alex Johnson',
    content: 'Tuesday works well. I\'ll send a calendar invite shortly. Looking forward to diving deeper into your plans.',
    timestamp: new Date('2024-01-15T10:50:00'),
  },
];

const DealRoom = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [showParticipants, setShowParticipants] = useState(false);
  
  // Mock current user
  const currentUserId = 'investor-1';
  const currentUserName = 'Alex Johnson';
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: Date.now().toString(),
      senderId: currentUserId,
      senderName: currentUserName,
      content: newMessage,
      timestamp: new Date(),
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">TechInnovate Deal Room</h1>
          <p className="text-sm text-gray-500">Healthcare Tech • Series A</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowParticipants(!showParticipants)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <Users className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Info className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-3xl mx-auto">
              {/* Date separator */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">January 15, 2024</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  id={message.id}
                  senderId={message.senderId}
                  senderName={message.senderName}
                  content={message.content}
                  timestamp={message.timestamp}
                  isCurrentUser={message.senderId === currentUserId}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Message input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-end border-2 border-gray-300 rounded-lg focus-within:border-blue-500 bg-white overflow-hidden">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 p-3 outline-none resize-none max-h-32"
                  rows={1}
                />
                <div className="flex items-center p-2">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ''}
                    className={`p-2 rounded-full ml-1 ${
                      newMessage.trim() === ''
                        ? 'bg-gray-200 text-gray-400'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Participants sidebar */}
        {showParticipants && (
          <div className="w-64 border-l border-gray-200 bg-white overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Participants</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-800 font-medium">AJ</span>
                  </div>
                  <div>
                    <div className="font-medium">Alex Johnson</div>
                    <div className="text-sm text-gray-500">Investor</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-800 font-medium">TI</span>
                  </div>
                  <div>
                    <div className="font-medium">TechInnovate</div>
                    <div className="text-sm text-gray-500">Startup</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-gray-800 font-medium">SL</span>
                  </div>
                  <div>
                    <div className="font-medium">Sarah Lee</div>
                    <div className="text-sm text-gray-500">TechInnovate CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealRoom;