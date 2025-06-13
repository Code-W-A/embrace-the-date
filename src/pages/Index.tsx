
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProfileCard from '../components/ProfileCard';
import MatchCard from '../components/MatchCard';
import { Heart, Users, MessageCircle } from 'lucide-react';

const Index = () => {
  const sampleProfiles = [
    {
      name: "Emma",
      age: 28,
      bio: "Love hiking, cooking, and exploring new coffee shops. Looking for someone who shares my passion for adventure and good conversations.",
      interests: ["Hiking", "Coffee", "Travel", "Photography"]
    },
    {
      name: "Alex",
      age: 32,
      bio: "Software engineer by day, musician by night. I enjoy concerts, tech meetups, and weekend getaways to the mountains.",
      interests: ["Music", "Technology", "Mountains", "Concerts"]
    },
    {
      name: "Sophie",
      age: 26,
      bio: "Artist and yoga instructor. I believe in mindful living, creativity, and finding beauty in everyday moments.",
      interests: ["Art", "Yoga", "Mindfulness", "Nature"]
    }
  ];

  const sampleMatches = [
    { name: "Maya", age: 29, matchPercentage: 94, lastActive: "Online now" },
    { name: "Jake", age: 31, matchPercentage: 87, lastActive: "Active 2h ago" },
    { name: "Luna", age: 27, matchPercentage: 82, lastActive: "Active today" },
    { name: "Ryan", age: 33, matchPercentage: 76, lastActive: "Active yesterday" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />
      <Hero />
      
      {/* Discover Section */}
      <section id="discover" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Amazing People
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through profiles of people who share your interests and values
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProfiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Recent Matches
            </h2>
            <p className="text-xl text-gray-600">
              Connect with people who liked you back
            </p>
          </div>
          
          <div className="grid gap-4">
            {sampleMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose LoveConnect?
            </h2>
            <p className="text-xl text-gray-600">
              The modern way to find meaningful connections
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI algorithm learns your preferences to suggest the most compatible matches
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Verified Profiles</h3>
              <p className="text-gray-600">
                All profiles are verified to ensure authentic connections and a safe environment
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Meaningful Conversations</h3>
              <p className="text-gray-600">
                Advanced messaging features to help you build genuine connections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Love?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have found their perfect match through LoveConnect
          </p>
          <button className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <span className="text-2xl font-bold">LoveConnect</span>
          </div>
          <p className="text-gray-400 mb-6">
            Connecting hearts, one match at a time
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Support</a>
            <a href="#" className="hover:text-pink-400 transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
