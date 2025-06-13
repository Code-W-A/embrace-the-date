
import { Heart, MessageCircle, User } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  age: number;
  bio: string;
  interests: string[];
  imageUrl?: string;
}

const ProfileCard = ({ name, age, bio, interests, imageUrl }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 bg-gradient-to-br from-pink-200 to-purple-200">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-20 h-20 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}, {age}</h3>
          <div className="flex space-x-2">
            <button className="p-2 bg-pink-100 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110">
              <Heart className="w-5 h-5" />
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
              className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
