import React from 'react';
import { Heart, X, Filter, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const Discover = () => {
  const profiles = [
    {
      id: 1,
      name: "Luna",
      age: 26,
      location: "2 miles away",
      bio: "Artist and yoga instructor. Love exploring new places and meeting creative people.",
      photos: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face"
      ],
      interests: ["Art", "Yoga", "Travel", "Photography"]
    },
    {
      id: 2,
      name: "Jake",
      age: 29,
      location: "5 miles away",
      bio: "Software engineer who loves rock climbing and craft beer. Always up for an adventure!",
      photos: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face"
      ],
      interests: ["Climbing", "Beer", "Technology", "Hiking"]
    }
  ];

  const [currentProfile, setCurrentProfile] = React.useState(0);

  return (
    <Layout>
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Discover</h1>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          <div className="max-w-md mx-auto">
            {profiles.length > 0 && (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Main Photo */}
                <div className="relative h-96">
                  <img 
                    src={profiles[currentProfile].photos[0]} 
                    alt={profiles[currentProfile].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Photo indicators */}
                  <div className="absolute top-4 left-0 right-0 flex justify-center space-x-2">
                    {profiles[currentProfile].photos.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/50'}`}
                      ></div>
                    ))}
                  </div>

                  {/* Profile Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl font-bold">{profiles[currentProfile].name}, {profiles[currentProfile].age}</h2>
                    <p className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {profiles[currentProfile].location}
                    </p>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{profiles[currentProfile].bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {profiles[currentProfile].interests.map((interest, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-6">
                    <button 
                      onClick={() => setCurrentProfile((prev) => (prev + 1) % profiles.length)}
                      className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors group"
                    >
                      <X className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setCurrentProfile((prev) => (prev + 1) % profiles.length)}
                      className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
                    >
                      <Heart className="w-8 h-8 text-white fill-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-2xl font-bold text-pink-500 mb-1">12</div>
                <div className="text-sm text-gray-600">Likes Today</div>
              </button>
              <button className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-2xl font-bold text-purple-500 mb-1">5</div>
                <div className="text-sm text-gray-600">New Matches</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Discover;
