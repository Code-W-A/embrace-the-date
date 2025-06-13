
import { Heart, MessageCircle, User, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 md:block hidden">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              LoveConnect
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/discover" 
              className={`font-medium transition-colors ${
                location.pathname === '/discover' 
                  ? 'text-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Discover
            </Link>
            <Link 
              to="/#matches" 
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Matches
            </Link>
            <Link 
              to="/messages" 
              className={`font-medium transition-colors ${
                location.pathname === '/messages' 
                  ? 'text-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Messages
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/messages" 
              className="p-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
            <Link 
              to="/profile" 
              className="p-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
