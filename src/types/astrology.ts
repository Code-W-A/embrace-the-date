
export interface ZodiacSign {
  name: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  dates: string;
  traits: string[];
  emoji: string;
}

export interface AstrologicalProfile {
  zodiacSign: ZodiacSign;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  element: string;
  compatibility: number;
}

export interface UserAstroProfile {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  photos: string[];
  astrologicalProfile: AstrologicalProfile;
}

export interface CompatibilityResult {
  percentage: number;
  description: string;
  strengths: string[];
  challenges: string[];
  recommendation: string;
}
