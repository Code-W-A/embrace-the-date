
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { Star, Sun, Moon, Share2, X } from "lucide-react";
import { DestinyPost } from "../types/destiny";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface DestinyPostModalProps {
  post: DestinyPost | null;
  open: boolean;
  onClose: () => void;
  onReact?: (type: "star" | "sun" | "moon") => void;
}

export default function DestinyPostModal({ post, open, onClose, onReact }: DestinyPostModalProps) {
  const navigate = useNavigate();

  if (!post) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Acum";
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}z`;
  };

  const handleProfileClick = () => {
    onClose();
    navigate(`/destiny-profile/${post.author.id}`);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-0">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 z-10 bg-white/80 hover:bg-white rounded-full p-2"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Header cu avatar și info */}
          <div className="p-6 pb-4">
            <div className="flex items-center cursor-pointer group" onClick={handleProfileClick}>
              <div className="relative">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-purple-200 shadow-md group-hover:border-purple-300 transition-colors" 
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors text-lg">{post.author.name}</div>
                  <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="text-sm text-gray-500">{formatDate(post.date)}</div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-purple-600 font-medium">{post.author.zodiac}</div>
                  <div className="ml-2 text-xs text-gray-400">✨</div>
                </div>
              </div>
            </div>
          </div>

          {/* Conținutul postării */}
          <div className="px-6 pb-4">
            <div className="text-gray-800 leading-relaxed text-lg">{post.content}</div>
          </div>

          {/* Media (imagine/video) - afișare la dimensiune completă */}
          {post.imageUrl && (
            <div className="px-6 pb-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={post.imageUrl} 
                  alt="Post foto" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          )}
          {post.videoUrl && (
            <div className="px-6 pb-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <video src={post.videoUrl} className="w-full h-auto" controls />
              </div>
            </div>
          )}

          {/* Reacții și acțiuni */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 rounded-full px-4 py-3 transition-all duration-200"
                  onClick={() => onReact?.("star")}
                >
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{post.reactions.find(x => x.type === "star")?.count ?? 0}</span>
                </Button>
                
                <Button 
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-orange-50 hover:text-orange-600 rounded-full px-4 py-3 transition-all duration-200"
                  onClick={() => onReact?.("sun")}
                >
                  <Sun className="w-6 h-6 text-orange-500 fill-current" />
                  <span className="text-sm font-medium">{post.reactions.find(x => x.type === "sun")?.count ?? 0}</span>
                </Button>
                
                <Button 
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 rounded-full px-4 py-3 transition-all duration-200"
                  onClick={() => onReact?.("moon")}
                >
                  <Moon className="w-6 h-6 text-blue-500 fill-current" />
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
                <div className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">
                  yDestiny
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
