
import { User, Camera, Heart, MessageCircle, MapPin, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';

const Profile = () => {
  const userProfile = {
    name: "Alex",
    age: 28,
    location: "New York, NY",
    bio: "Adventure seeker, coffee enthusiast, and dog lover. I enjoy hiking, trying new restaurants, and exploring the city. Looking for someone to share life's adventures with.",
    interests: ["Travel", "Photography", "Cooking", "Hiking", "Music", "Art"],
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />
      
      <div className="pt-24 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 bg-gradient-to-r from-pink-400 to-purple-600">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-3xl font-bold">{userProfile.name}, {userProfile.age}</h1>
                <p className="flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {userProfile.location}
                </p>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Photos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {userProfile.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                      <img 
                        src={photo} 
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-pink-400 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Add Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{userProfile.bio}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {userProfile.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    <Heart className="w-5 h-5" />
                    <span>Like Profile</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-600 py-3 rounded-lg hover:border-pink-400 hover:text-pink-600 transition-colors">
                    <User className="w-5 h-5" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profile Views</span>
                    <span className="font-semibold text-gray-800">142</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Likes Received</span>
                    <span className="font-semibold text-gray-800">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Messages</span>
                    <span className="font-semibold text-gray-800">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
