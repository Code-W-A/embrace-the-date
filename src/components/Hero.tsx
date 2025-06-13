
import { Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Perfect Match
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with like-minded people, build meaningful relationships, and discover love in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Matching
            </button>
            <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-full font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">5K+</div>
              <div className="text-gray-600">Matches Made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Smart Matching</h3>
                <p className="text-gray-600">AI-powered compatibility</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-700">Advanced filters</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Verified profiles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-gray-700">Safe & secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
