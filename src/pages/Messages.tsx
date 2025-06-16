
import { Search, MoreVertical, Send, Heart, ArrowLeft, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  const conversations = [
    {
      id: 1,
      name: "Emma",
      lastMessage: "Hey! I saw your profile and loved your hiking photos 😊",
      time: "2m ago",
      unread: 2,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      online: true
    },
    {
      id: 2,
      name: "Sophie",
      lastMessage: "Thanks for the like! Your art collection is amazing",
      time: "1h ago",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      online: false
    },
    {
      id: 3,
      name: "Maya",
      lastMessage: "Would love to check out that coffee shop you mentioned!",
      time: "3h ago",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      online: true
    }
  ];

  const currentMessages = [
    { id: 1, text: "Hey! I saw your profile and loved your hiking photos 😊", sender: "other", time: "2m ago" },
    { id: 2, text: "Thank you! I love getting out into nature. Do you hike often?", sender: "me", time: "1m ago" },
    { id: 3, text: "All the time! I'm actually planning a trip to the mountains next weekend", sender: "other", time: "30s ago" }
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <Layout>
      <div className="px-4 py-4 md:py-8">
        <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)] md:h-[calc(100vh-7rem)]">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex">
            {/* Conversations List - Afișat pe mobile doar când nu e selectată conversația */}
            <div className={`w-full md:w-1/3 md:border-r border-gray-200 flex flex-col ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
              <div className="p-4 md:p-6 border-b border-gray-200">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div 
                    key={conversation.id} 
                    className="p-3 md:p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img 
                          src={conversation.avatar} 
                          alt={conversation.name}
                          className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800 truncate text-sm md:text-base">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <div className="w-4 md:w-5 h-4 md:h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area - Afișat pe mobile doar când e selectată conversația */}
            <div className={`flex-1 flex flex-col ${selectedConversation ? 'flex' : 'hidden md:flex'}`}>
              {selectedConversation && selectedConv ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button 
                        className="md:hidden p-2 text-gray-400 hover:text-gray-600"
                        onClick={() => setSelectedConversation(null)}
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <img 
                        src={selectedConv.avatar} 
                        alt={selectedConv.name}
                        className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="font-semibold text-gray-800 text-sm md:text-base">{selectedConv.name}</h2>
                        <p className="text-xs md:text-sm text-green-500">Online now</p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4">
                    {currentMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[280px] md:max-w-xs lg:max-w-md px-3 md:px-4 py-2 rounded-2xl ${
                          message.sender === 'me' 
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm md:text-base">{message.text}</p>
                          <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-pink-100' : 'text-gray-500'}`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-3 md:p-6 border-t border-gray-200">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <button className="p-2 text-pink-500 hover:bg-pink-50 rounded-full transition-colors">
                        <Heart className="w-4 md:w-5 h-4 md:h-5" />
                      </button>
                      <div className="flex-1 relative">
                        <input 
                          type="text" 
                          placeholder="Type a message..."
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 pr-10 md:pr-12 text-sm md:text-base"
                        />
                        <button className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                          <Send className="w-3 md:w-4 h-3 md:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="hidden md:flex flex-1 items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium">Select a conversation</p>
                    <p className="text-sm">Choose a conversation from the list to start chatting</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
