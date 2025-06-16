
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '../../types/registration';

interface QuestionCardProps {
  question: Question;
  answer: string | string[];
  onAnswerChange: (answer: string | string[]) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  answer, 
  onAnswerChange 
}) => {
  const handleRadioChange = (value: string) => {
    onAnswerChange(value);
  };

  const handleInputChange = (value: string) => {
    onAnswerChange(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        {question.type === 'single' && question.options && (
          <RadioGroup value={answer as string} onValueChange={handleRadioChange}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}

        {question.type === 'input' && (
          <Input
            value={answer as string}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={question.placeholder}
            className="max-w-md"
          />
        )}
      </CardContent>
    </Card>
  );
};
