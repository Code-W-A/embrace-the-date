
import { Heart, MessageCircle } from 'lucide-react';

interface MatchCardProps {
  name: string;
  age: number;
  matchPercentage: number;
  lastActive: string;
}

const MatchCard = ({ name, age, matchPercentage, lastActive }: MatchCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-pink-100">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-700">{name.charAt(0)}</span>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <Heart className="w-3 h-3 text-white fill-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{name}, {age}</h4>
          <p className="text-sm text-gray-600">{lastActive}</p>
          <div className="flex items-center mt-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${matchPercentage}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm font-semibold text-purple-600">{matchPercentage}%</span>
          </div>
        </div>
        
        <button className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 hover:scale-110">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
