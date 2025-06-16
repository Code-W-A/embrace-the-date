
import { useNavigate } from "react-router-dom";
import { Star, Sun, Moon, Share2, MessageCircle, Heart } from "lucide-react";
import { DestinyPost } from "../types/destiny";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useDoubleTab } from "../hooks/useDoubleTab";
import { useSwipeGestures } from "../hooks/useSwipeGestures";
import { useState, useRef } from "react";

interface DestinyPostCardProps {
  post: DestinyPost;
  onReact?: (type: "star" | "sun" | "moon") => void;
  onPostClick?: () => void;
  onOpenComments?: () => void;
  fontSize?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export default function DestinyPostCard({ 
  post, 
  onReact, 
  onPostClick, 
  onOpenComments,
  fontSize = 16,
  onSwipeLeft,
  onSwipeRight
}: DestinyPostCardProps) {
  const navigate = useNavigate();
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Acum";
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}z`;
  };

  const handleDoubleTab = useDoubleTab(() => {
    onReact?.("star");
    setShowHeartAnimation(true);
    setTimeout(() => setShowHeartAnimation(false), 1000);
  });

  const swipeRef = useSwipeGestures({
    onSwipeLeft,
    onSwipeRight,
  });

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onPostClick?.();
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/destiny-profile/${post.author.id}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Card 
      ref={swipeRef}
      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Gradient de fundal subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 rounded-3xl"></div>
      
      {/* Heart Animation pentru double tap */}
      {showHeartAnimation && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <Heart className="w-16 h-16 text-red-500 fill-current animate-scale-in" />
        </div>
      )}
      
      <div className="relative z-10">
        {/* Header cu avatar și info */}
        <div className="flex items-center mb-4 cursor-pointer group" onClick={handleProfileClick}>
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
        <div 
          className="mb-4 text-gray-800 leading-relaxed" 
          style={{ fontSize: `${fontSize}px` }}
          onDoubleClick={handleDoubleTab}
        >
          {post.content}
        </div>

        {/* Media (imagine/video) cu lazy loading */}
        {post.imageUrl && (
          <div className="mb-4 rounded-2xl overflow-hidden shadow-lg relative" onDoubleClick={handleDoubleTab}>
            {!imageLoaded && (
              <div className="w-full h-80 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
                <div className="text-gray-400">Se încarcă...</div>
              </div>
            )}
            <img 
              ref={imageRef}
              src={post.imageUrl} 
              alt="Post foto" 
              className={`w-full max-h-80 object-cover hover:scale-105 transition-transform duration-300 ${
                imageLoaded ? 'block' : 'hidden'
              }`}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </div>
        )}
        {post.videoUrl && (
          <div className="mb-4 rounded-2xl overflow-hidden shadow-lg" onDoubleClick={handleDoubleTab}>
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
              onClick={(e) => {
                e.stopPropagation();
                onReact?.("star");
              }}
            >
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{post.reactions.find(x => x.type === "star")?.count ?? 0}</span>
            </Button>
            
            <Button 
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 hover:bg-orange-50 hover:text-orange-600 rounded-full px-3 py-2 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onReact?.("sun");
              }}
            >
              <Sun className="w-5 h-5 text-orange-500 fill-current" />
              <span className="text-sm font-medium">{post.reactions.find(x => x.type === "sun")?.count ?? 0}</span>
            </Button>
            
            <Button 
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 rounded-full px-3 py-2 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onReact?.("moon");
              }}
            >
              <Moon className="w-5 h-5 text-blue-500 fill-current" />
              <span className="text-sm font-medium">{post.reactions.find(x => x.type === "moon")?.count ?? 0}</span>
            </Button>

            <Button 
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 rounded-full px-3 py-2 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onOpenComments?.();
              }}
            >
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">2</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full p-2 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
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
