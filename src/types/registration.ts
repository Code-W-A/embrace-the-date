
export interface Question {
  id: number;
  text: string;
  options?: string[];
  type: 'single' | 'multiple' | 'input';
  placeholder?: string;
  validation?: {
    type: string;
    format?: string;
  };
  next: number | null;
  matchRequired: boolean;
  compatibility: boolean;
}

export interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
  age: number;
  location: string;
  bio: string;
  photos: File[];
  answers: Record<number, string | string[]>;
}

export interface RegistrationStep {
  id: number;
  title: string;
  description: string;
  component: string;
}
