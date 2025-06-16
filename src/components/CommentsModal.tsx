
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Heart, Send, X } from "lucide-react";
import { Comment, CommentInput } from "../types/comments";

interface CommentsModalProps {
  postId: number;
  open: boolean;
  onClose: () => void;
}

const dummyComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: {
      id: 2,
      name: "Radu",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=128&h=128&fit=crop",
      zodiac: "Berbec"
    },
    content: "Ce fotografie frumoasă! Energia ta pozitivă se simte prin imagine! ✨",
    date: "2025-06-14T11:30:00.000Z",
    reactions: { likes: 3, userLiked: false }
  },
  {
    id: 2,
    postId: 1,
    author: {
      id: 3,
      name: "Maria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=128&h=128&fit=crop",
      zodiac: "Balanță"
    },
    content: "Recunoștința este cheia fericirii! 🙏 Mulțumesc că ne inspire!",
    date: "2025-06-14T12:15:00.000Z",
    reactions: { likes: 1, userLiked: true }
  }
];

export default function CommentsModal({ postId, open, onClose }: CommentsModalProps) {
  const [comments, setComments] = useState<Comment[]>(
    dummyComments.filter(c => c.postId === postId)
  );
  const [newComment, setNewComment] = useState("");

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Acum";
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}z`;
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      postId,
      author: {
        id: 1,
        name: "Tu",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=128&h=128&fit=crop",
        zodiac: "Leu"
      },
      content: newComment,
      date: new Date().toISOString(),
      reactions: { likes: 0, userLiked: false }
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleLikeComment = (commentId: number) => {
    setComments(comments.map(c => 
      c.id === commentId 
        ? {
            ...c,
            reactions: {
              likes: c.reactions.userLiked ? c.reactions.likes - 1 : c.reactions.likes + 1,
              userLiked: !c.reactions.userLiked
            }
          }
        : c
    ));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] p-0 bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl">
        <DialogHeader className="p-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">Comentarii</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto max-h-96 px-6">
          {comments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>Nu există comentarii încă.</p>
              <p className="text-sm">Fii primul care comentează!</p>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-2xl px-3 py-2">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm">{comment.author.name}</span>
                        <span className="text-xs text-purple-600">{comment.author.zodiac}</span>
                      </div>
                      <p className="text-gray-800 text-sm">{comment.content}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-1 ml-3">
                      <span className="text-xs text-gray-500">{formatTime(comment.date)}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 text-xs text-gray-500 hover:text-red-500"
                        onClick={() => handleLikeComment(comment.id)}
                      >
                        <Heart 
                          className={`w-3 h-3 mr-1 ${comment.reactions.userLiked ? 'fill-red-500 text-red-500' : ''}`} 
                        />
                        {comment.reactions.likes > 0 && comment.reactions.likes}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 pt-4 border-t border-gray-100">
          <div className="flex space-x-3">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=128&h=128&fit=crop"
              alt="Tu"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 flex space-x-2">
              <input
                type="text"
                placeholder="Scrie un comentariu..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              />
              <Button
                size="sm"
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="rounded-full bg-purple-500 hover:bg-purple-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
