import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import MatchCard from '../components/MatchCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const profiles = [
    {
      id: 1,
      name: "Alice",
      age: 24,
      location: "Los Angeles, CA",
      bio: "Aspiring photographer and coffee addict. Let's explore the city together!",
      photos: [
        "https://images.unsplash.com/photo-1531427186534-6c19b56e80ce?w=400&h=500&fit=crop&crop=face"
      ],
      interests: ["Photography", "Coffee", "Travel", "Hiking"]
    },
    {
      id: 2,
      name: "Bob",
      age: 29,
      location: "New York, NY",
      bio: "Software engineer and craft beer enthusiast. Looking for someone to share a pint with.",
      photos: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
      ],
      interests: ["Software", "Craft Beer", "Gaming", "Music"]
    },
    {
      id: 3,
      name: "Charlie",
      age: 26,
      location: "Chicago, IL",
      bio: "Marketing professional and foodie. Always on the hunt for the best new restaurants.",
      photos: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
      ],
      interests: ["Marketing", "Food", "Travel", "Reading"]
    }
  ];

  const matches = [
    {
      id: 4,
      name: "Diana",
      age: 27,
      location: "San Francisco, CA",
      bio: "Product manager and yoga lover. Seeking someone to enjoy life's simple pleasures with.",
      photos: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b2933e?w=400&h=500&fit=crop&crop=face"
      ],
      interests: ["Product Management", "Yoga", "Travel", "Cooking"]
    },
    {
      id: 5,
      name: "Eve",
      age: 30,
      location: "Austin, TX",
      bio: "Data scientist and outdoor enthusiast. Let's go hiking or kayaking!",
      photos: [
        "https://images.unsplash.com/photo-1503023345310-154ca6123c14?w=400&h=500&fit=crop&crop=face"
      ],
      interests: ["Data Science", "Outdoors", "Hiking", "Kayaking"]
    }
  ];

  return (
    <Layout>
      <div className="px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Find Your Perfect Match
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Connect with like-minded individuals and discover meaningful relationships.
          </p>
          <Link
            to="/discover"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Get Started</span>
            <Heart className="w-5 h-5" />
          </Link>
        </section>

        {/* Call to Action pentru chestionarul astrologic */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Descoperă-ți Compatibilitatea Astrologică
          </h2>
          <p className="text-lg mb-6 text-purple-100">
            Răspunde la câteva întrebări despre zodia ta și descoperă cu cine ești cel mai compatibil(ă)
          </p>
          <Link
            to="/astrology-quiz"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Începe Chestionarul</span>
            <Heart className="w-5 h-5" />
          </Link>
        </section>

        {/* Recent Matches */}
        <section id="matches" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">12,457</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">8,231</h3>
            <p className="text-gray-600">Connections Made</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">4.8/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
