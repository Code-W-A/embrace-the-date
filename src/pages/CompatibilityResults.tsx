
import Layout from '../components/Layout';
import { UserAstroProfile } from '../types/astrology';
import { zodiacSigns } from '../data/zodiacData';
import { Heart, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompatibilityResults = () => {
  // Dummy data pentru utilizatorul curent
  const currentUser = {
    zodiacSign: zodiacSigns[4], // Leo
    element: 'Fire'
  };

  // Dummy data pentru potențiale match-uri
  const potentialMatches: UserAstroProfile[] = [
    {
      id: 1,
      name: 'Maria',
      age: 26,
      location: 'București',
      bio: 'Iubesc natura și artele vizuale. Căut o conexiune profundă și autentică.',
      photos: ['https://images.unsplash.com/photo-1494790108755-2616b612b5cc?w=400&h=500&fit=crop&crop=face'],
      astrologicalProfile: {
        zodiacSign: zodiacSigns[8], // Sagittarius
        birthDate: '1997-12-05',
        element: 'Fire',
        compatibility: 95
      }
    },
    {
      id: 2,
      name: 'Elena',
      age: 28,
      location: 'Cluj-Napoca',
      bio: 'Pasionată de călătorii și gastronomie. Cred în magia momentelor simple.',
      photos: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face'],
      astrologicalProfile: {
        zodiacSign: zodiacSigns[0], // Aries
        birthDate: '1995-04-15',
        element: 'Fire',
        compatibility: 88
      }
    },
    {
      id: 3,
      name: 'Andreea',
      age: 25,
      location: 'Iași',
      bio: 'Creativă și energică, iubesc muzica și dansul. Căut pe cineva cu care să îmi împart pasiunile.',
      photos: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face'],
      astrologicalProfile: {
        zodiacSign: zodiacSigns[2], // Gemini
        birthDate: '1998-06-10',
        element: 'Air',
        compatibility: 82
      }
    }
  ];

  const getCompatibilityColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-yellow-600 bg-yellow-100';
    if (percentage >= 70) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getCompatibilityText = (percentage: number) => {
    if (percentage >= 90) return 'Compatibilitate Excelentă';
    if (percentage >= 80) return 'Compatibilitate Bună';
    if (percentage >= 70) return 'Compatibilitate Moderată';
    return 'Compatibilitate Slabă';
  };

  return (
    <Layout>
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-8">
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Compatibilitățile Tale</h1>
              <p className="text-purple-100">
                Profilul tău: {currentUser.zodiacSign.emoji} {currentUser.zodiacSign.name} ({currentUser.element})
              </p>
            </div>
          </div>

          {/* Compatibility explanation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Heart className="w-6 h-6 text-pink-500 mr-2" />
              Cum funcționează compatibilitatea
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">Elemente compatibile:</h3>
                <ul className="space-y-1">
                  <li>🔥 Foc + Aer = Energie și creativitate</li>
                  <li>🌍 Pământ + Apă = Stabilitate și emoție</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Factori considerați:</h3>
                <ul className="space-y-1">
                  <li>• Compatibilitatea zodiilor</li>
                  <li>• Armonia elementelor</li>
                  <li>• Trăsăturile complementare</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Matches */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Users className="w-8 h-8 text-purple-500 mr-3" />
              Potențiale Compatibilități
            </h2>

            {potentialMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={match.photos[0]}
                      alt={match.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {match.name}, {match.age}
                        </h3>
                        <p className="text-gray-600">{match.location}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCompatibilityColor(match.astrologicalProfile.compatibility)}`}>
                          {match.astrologicalProfile.compatibility}% Match
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {getCompatibilityText(match.astrologicalProfile.compatibility)}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{match.bio}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{match.astrologicalProfile.zodiacSign.emoji}</span>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {match.astrologicalProfile.zodiacSign.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              Element: {match.astrologicalProfile.element}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/compatibility-details/${match.id}`}
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <span>Vezi detalii</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Vrei să explorezi mai multe compatibilități?
            </h3>
            <p className="text-gray-600 mb-4">
              Răspunde la mai multe întrebări pentru a obține rezultate și mai precise.
            </p>
            <Link
              to="/advanced-quiz"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <span>Chestionar Avansat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompatibilityResults;
