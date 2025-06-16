
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { PhotoUpload } from '../components/registration/PhotoUpload';
import { PersonalInfoForm } from '../components/registration/PersonalInfoForm';
import { QuestionCard } from '../components/registration/QuestionCard';
import { UserRegistrationData } from '../types/registration';
import { firstQuestions } from '../data/registrationQuestions';
import { toast } from 'sonner';

const Registration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [registrationData, setRegistrationData] = useState<UserRegistrationData>({
    name: '',
    email: '',
    password: '',
    age: 0,
    location: '',
    bio: '',
    photos: [],
    answers: {}
  });

  const steps = [
    { title: 'Informații personale', description: 'Completează profilul tău' },
    { title: 'Fotografii', description: 'Adaugă fotografii' },
    { title: 'Întrebări compatibilitate', description: 'Răspunde la întrebări' },
    { title: 'Finalizare', description: 'Confirmă înregistrarea' }
  ];

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handlePersonalInfoChange = (field: string, value: string | number) => {
    setRegistrationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotosChange = (photos: File[]) => {
    setRegistrationData(prev => ({
      ...prev,
      photos
    }));
  };

  const handleAnswerChange = (answer: string | string[]) => {
    const currentQuestion = firstQuestions[currentQuestionIndex];
    setRegistrationData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer
      }
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: // Personal info
        return registrationData.name && registrationData.email && registrationData.password && registrationData.age > 0;
      case 1: // Photos
        return registrationData.photos.length > 0;
      case 2: // Questions
        const currentQuestion = firstQuestions[currentQuestionIndex];
        return registrationData.answers[currentQuestion.id];
      case 3: // Final
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === 2) {
      // Handle questions navigation
      if (currentQuestionIndex < firstQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentStep(prev => prev + 1);
      }
    } else if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2 && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      if (currentStep === 3) {
        setCurrentQuestionIndex(firstQuestions.length - 1);
      }
    }
  };

  const handleFinish = () => {
    toast.success('Înregistrarea a fost finalizată cu succes!');
    console.log('Registration data:', registrationData);
    navigate('/');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoForm
            data={{
              name: registrationData.name,
              email: registrationData.email,
              password: registrationData.password,
              age: registrationData.age,
              location: registrationData.location,
              bio: registrationData.bio
            }}
            onChange={handlePersonalInfoChange}
          />
        );
      case 1:
        return (
          <PhotoUpload
            photos={registrationData.photos}
            onPhotosChange={handlePhotosChange}
          />
        );
      case 2:
        const currentQuestion = firstQuestions[currentQuestionIndex];
        return (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Întrebarea {currentQuestionIndex + 1} din {firstQuestions.length}
              </p>
            </div>
            <QuestionCard
              question={currentQuestion}
              answer={registrationData.answers[currentQuestion.id] || ''}
              onAnswerChange={handleAnswerChange}
            />
          </div>
        );
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Înregistrarea este gata!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ai completat cu succes toate informațiile necesare. Apasă "Finalizează" pentru a-ți crea contul.
              </p>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Înregistrare YDestiny</h1>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{steps[currentStep].title}</span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <p className="text-center text-gray-600">{steps[currentStep].description}</p>
        </div>

        <div className="mb-8">
          {renderStepContent()}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0 && currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi
          </Button>

          {currentStep === totalSteps - 1 ? (
            <Button
              onClick={handleFinish}
              disabled={!canProceed()}
              className="flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Finalizează
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center gap-2"
            >
              Continuă
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
