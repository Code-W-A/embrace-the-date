
import { useNavigate } from "react-router-dom";
import { Star, Sun, Moon, Share2 } from "lucide-react";
import { DestinyPost } from "../types/destiny";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface DestinyPostCardProps {
  post: DestinyPost;
  onReact?: (type: "star" | "sun" | "moon") => void;
}

export default function DestinyPostCard({ post, onReact }: DestinyPostCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="p-4 mb-6 shadow-md relative">
      <div className="flex items-center mb-2 cursor-pointer" onClick={() => navigate(`/destiny-profile/${post.author.id}`)}>
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <div className="font-semibold text-gray-800">{post.author.name}</div>
          <div className="text-xs text-gray-500">{post.author.zodiac}</div>
        </div>
      </div>
      <div className="mb-3">{post.content}</div>
      {post.imageUrl && (
        <img src={post.imageUrl} alt="Post foto" className="rounded-lg mb-2 max-h-60 object-cover w-full" />
      )}
      {post.videoUrl && (
        <video src={post.videoUrl} className="rounded-lg mb-2 w-full" controls />
      )}
      <div className="flex items-center mt-2 gap-4">
        <Button 
          variant="ghost"
          size="icon"
          aria-label="Îmi place"
          onClick={() => onReact?.("star")}
        >
          <Star className="text-yellow-400" />
          <span className="ml-1 text-xs">{post.reactions.find(x => x.type === "star")?.count ?? 0}</span>
        </Button>
        <Button 
          variant="ghost"
          size="icon"
          aria-label="Superb"
          onClick={() => onReact?.("sun")}
        >
          <Sun className="text-orange-400" />
          <span className="ml-1 text-xs">{post.reactions.find(x => x.type === "sun")?.count ?? 0}</span>
        </Button>
        <Button 
          variant="ghost"
          size="icon"
          aria-label="Trist"
          onClick={() => onReact?.("moon")}
        >
          <Moon className="text-blue-400" />
          <span className="ml-1 text-xs">{post.reactions.find(x => x.type === "moon")?.count ?? 0}</span>
        </Button>
        <div className="ml-auto flex items-center">
          <Button variant="outline" size="icon" aria-label="Distribuie">
            <Share2 className="w-5 h-5" />
          </Button>
          <span className="text-xs text-gray-400 ml-1">yDestiny</span>
        </div>
      </div>
    </Card>
  );
}
