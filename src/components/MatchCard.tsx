
import { Heart, MessageCircle, User } from 'lucide-react';

interface Match {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  photos: string[];
  interests: string[];
}

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  const { name, age, bio, interests = [], photos } = match;
  const imageUrl = photos && photos.length > 0 ? photos[0] : undefined;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 bg-gradient-to-br from-purple-200 to-pink-200">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-20 h-20 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Match indicator */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Match!
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}, {age}</h3>
          <div className="flex space-x-2">
            <button className="p-2 bg-green-100 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110">
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <button className="p-2 bg-blue-100 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{bio}</p>
        
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
