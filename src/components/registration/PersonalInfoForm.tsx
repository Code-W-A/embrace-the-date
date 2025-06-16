
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';

interface PersonalInfoFormProps {
  data: {
    name: string;
    email: string;
    password: string;
    age: number;
    location: string;
    bio: string;
  };
  onChange: (field: string, value: string | number) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Informații personale
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nume</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="Numele tău complet"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">Vârsta</Label>
            <Input
              id="age"
              type="number"
              value={data.age || ''}
              onChange={(e) => onChange('age', parseInt(e.target.value) || 0)}
              placeholder="Vârsta ta"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="email@exemplu.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Parolă</Label>
          <Input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => onChange('password', e.target.value)}
            placeholder="Parola ta"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Locația</Label>
          <Input
            id="location"
            value={data.location}
            onChange={(e) => onChange('location', e.target.value)}
            placeholder="Orașul tău"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Descriere</Label>
          <Textarea
            id="bio"
            value={data.bio}
            onChange={(e) => onChange('bio', e.target.value)}
            placeholder="Scrie câteva cuvinte despre tine..."
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};
