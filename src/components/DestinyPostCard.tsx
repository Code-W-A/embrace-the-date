
import { useNavigate } from "react-router-dom";
import { Star, Sun, Moon, Share2, Heart } from "lucide-react";
import { DestinyPost } from "../types/destiny";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface DestinyPostCardProps {
  post: DestinyPost;
  onReact?: (type: "star" | "sun" | "moon") => void;
}

export default function DestinyPostCard({ post, onReact }: DestinyPostCardProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Acum";
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}z`;
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden">
      {/* Gradient de fundal subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 rounded-3xl"></div>
      
      <div className="relative z-10">
        {/* Header cu avatar și info */}
        <div className="flex items-center mb-4 cursor-pointer group" onClick={() => navigate(`/destiny-profile/${post.author.id}`)}>
          <div className="relative">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-200 shadow-md group-hover:border-purple-300 transition-colors" 
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{post.author.name}</div>
              <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="text-sm text-gray-500">{formatDate(post.date)}</div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-purple-600 font-medium">{post.author.zodiac}</div>
              <div className="ml-2 text-xs text-gray-400">✨</div>
            </div>
          </div>
        </div>

        {/* Conținutul postării */}
        <div className="mb-4 text-gray-800 leading-relaxed">{post.content}</div>

        {/* Media (imagine/video) */}
        {post.imageUrl && (
          <div className="mb-4 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.imageUrl} 
              alt="Post foto" 
              className="w-full max-h-80 object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        )}
        {post.videoUrl && (
          <div className="mb-4 rounded-2xl overflow-hidden shadow-lg">
            <video src={post.videoUrl} className="w-full" controls />
          </div>
        )}

        {/* Reacții și acțiuni */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 rounded-full px-3 py-2 transition-all duration-200"
              onClick={() => onReact?.("star")}
            >
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{post.reactions.find(x => x.type === "star")?.count ?? 0}</span>
            </Button>
            
            <Button 
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 hover:bg-orange-50 hover:text-orange-600 rounded-full px-3 py-2 transition-all duration-200"
              onClick={() => onReact?.("sun")}
            >
              <Sun className="w-5 h-5 text-orange-500 fill-current" />
              <span className="text-sm font-medium">{post.reactions.find(x => x.type === "sun")?.count ?? 0}</span>
            </Button>
            
            <Button 
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 rounded-full px-3 py-2 transition-all duration-200"
              onClick={() => onReact?.("moon")}
            >
              <Moon className="w-5 h-5 text-blue-500 fill-current" />
              <span className="text-sm font-medium">{post.reactions.find(x => x.type === "moon")?.count ?? 0}</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full p-2 transition-all duration-200"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <div className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-full">
              yDestiny
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
