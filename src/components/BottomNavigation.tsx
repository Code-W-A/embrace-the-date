
import { Heart, MessageCircle, User, Compass, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      icon: Home,
      label: 'Home',
      activeColor: 'text-pink-500'
    },
    {
      path: '/destiny-feed',
      icon: Compass,
      label: 'Calea Destinului',
      activeColor: 'text-violet-600'
    },
    {
      path: '/discover',
      icon: Compass,
      label: 'Discover',
      activeColor: 'text-purple-500'
    },
    {
      path: '/messages',
      icon: MessageCircle,
      label: 'Messages',
      activeColor: 'text-blue-500'
    },
    {
      path: '/profile',
      icon: User,
      label: 'Profile',
      activeColor: 'text-emerald-500'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 min-w-0 flex-1 ${
                isActive 
                  ? `${item.activeColor} bg-pink-50` 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`relative ${isActive ? 'transform scale-110' : ''}`}>
                <Icon 
                  className={`w-6 h-6 transition-all duration-200 ${
                    isActive ? 'stroke-2' : 'stroke-1.5'
                  }`} 
                />
                {item.path === '/messages' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                )}
              </div>
              <span className={`text-xs mt-1 font-medium truncate ${
                isActive ? 'opacity-100' : 'opacity-70'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
