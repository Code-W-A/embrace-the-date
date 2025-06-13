
import { Heart, MessageCircle, User, Users } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              LoveConnect
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#discover" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Discover
            </a>
            <a href="#matches" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Matches
            </a>
            <a href="#messages" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Messages
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
