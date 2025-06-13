
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ZodiacSelector from '../components/ZodiacSelector';
import { ZodiacSign } from '../types/astrology';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const AstrologyQuiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Salvăm datele și mergem la compatibilități
      console.log('Profil astrologic completat:', {
        zodiacSign: selectedSign,
        birthDate,
        birthTime,
        birthPlace
      });
      navigate('/compatibility-results');
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedSign !== null;
      case 2:
        return birthDate !== '';
      case 3:
        return birthTime !== '';
      case 4:
        return birthPlace !== '';
      default:
        return false;
    }
  };

  return (
    <Layout>
      <div className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pasul {currentStep} din 4
              </span>
              <span className="text-sm font-medium text-purple-600">
                {Math.round((currentStep / 4) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Zodiac Selection */}
          {currentStep === 1 && (
            <ZodiacSelector
              onSelect={setSelectedSign}
              selectedSign={selectedSign || undefined}
            />
          )}

          {/* Step 2: Birth Date */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Data nașterii
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Data nașterii ne ajută să calculăm mai precis compatibilitatea astrologică.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Birth Time */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Ora nașterii
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="time"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Ora exactă a nașterii influențează ascendentul și pozițiile planetelor.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Birth Place */}
          {currentStep === 4 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Locul nașterii
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                    placeholder="ex: București, România"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Locul nașterii este necesar pentru calcularea hărții natale complete.
                </p>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Înapoi
            </button>
            
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>{currentStep === 4 ? 'Finalizează' : 'Continuă'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AstrologyQuiz;
