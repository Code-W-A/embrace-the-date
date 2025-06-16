
import { Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 md:block hidden">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              YDestiny
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Select defaultValue="ro">
              <SelectTrigger className="w-[120px] border-pink-200 focus:ring-pink-400">
                <Globe className="w-4 h-4 mr-2 text-pink-500" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ro">Română</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
