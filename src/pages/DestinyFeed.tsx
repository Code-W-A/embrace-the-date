
import { useState } from "react";
import Layout from "../components/Layout";
import DestinyPostCard from "../components/DestinyPostCard";
import DestinyPostModal from "../components/DestinyPostModal";
import { DestinyPost, DestinyProfileUser } from "../types/destiny";
import { Button } from "../components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";

const PROMPTS = [
  "Ce emoție te domină azi?",
  "La ce te gândești chiar acum?",
  "Ce te-ar bucura cel mai mult astăzi?",
  "Dacă ai putea schimba ceva azi, ce ar fi?",
  "Ce ți-ar plăcea să afle ceilalți despre tine?",
  "Ce moment ți-a adus un zâmbet astăzi?",
  "Împărtășește o mică bucurie sau un mic triumf!",
  "Cum e partenerul perfect pentru tine acum? (3 calități)",
  "Ce este cel mai important într-o relație pentru tine?",
];

const dummyUsers: DestinyProfileUser[] = [
  {
    id: 1,
    name: "Andreea",
    zodiac: "Leu",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=128&h=128&fit=crop",
    bio: "Îmi place să explorez natura și să citesc cărți despre astrologie.",
    following: false,
  },
  {
    id: 2,
    name: "Radu",
    zodiac: "Berbec",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=128&h=128&fit=crop",
    bio: "Energie pozitivă și pasiune pentru fotografie.",
    following: true,
  },
];

const dummyPosts: DestinyPost[] = [
  {
    id: 1,
    author: dummyUsers[0],
    content: "Astăzi sunt recunoscătoare pentru prietenii dragi din viața mea.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    reactions: [
      { type: "star", count: 5 },
      { type: "sun", count: 2 },
      { type: "moon", count: 0 },
    ],
    date: "2025-06-14T10:00:00.000Z",
  },
  {
    id: 2,
    author: dummyUsers[1],
    content: "Am surprins răsăritul de soare pe munte! ☀️",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    reactions: [
      { type: "star", count: 6 },
      { type: "sun", count: 8 },
      { type: "moon", count: 1 },
    ],
    date: "2025-06-14T07:30:00.000Z",
  },
];

export default function DestinyFeed() {
  const [posts, setPosts] = useState<DestinyPost[]>(dummyPosts);
  const [prompt, setPrompt] = useState(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
  const [content, setContent] = useState("");
  const [creating, setCreating] = useState(false);
  const [selectedPost, setSelectedPost] = useState<DestinyPost | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const currentUser = dummyUsers[0];

  const handleCreatePost = () => {
    if (!content.trim()) return;
    setPosts([
      {
        id: Math.max(...posts.map(p => p.id)) + 1,
        author: currentUser,
        content,
        imageUrl: undefined,
        videoUrl: undefined,
        reactions: [
          { type: "star", count: 0 },
          { type: "sun", count: 0 },
          { type: "moon", count: 0 },
        ],
        date: new Date().toISOString(),
      },
      ...posts,
    ]);
    setContent("");
    setPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
    setCreating(false);
  };

  function handleReactToPost(postId: number, type: "star" | "sun" | "moon") {
    setPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              reactions: post.reactions.map(r =>
                r.type === type ? { ...r, count: r.count + 1 } : r
              ),
            }
          : post
      )
    );
  }

  const handlePostClick = (post: DestinyPost) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleModalReact = (type: "star" | "sun" | "moon") => {
    if (selectedPost) {
      handleReactToPost(selectedPost.id, type);
      // Update the selected post with new reaction count
      setSelectedPost(prev => {
        if (!prev) return null;
        return {
          ...prev,
          reactions: prev.reactions.map(r =>
            r.type === type ? { ...r, count: r.count + 1 } : r
          )
        };
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-2xl mx-auto py-8 px-4">
          {/* Header cu gradient și animație */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent bg-clip-text animate-fade-in">
              ✨ Calea Destinului ✨
            </h1>
            <p className="text-gray-600 font-medium">Împărtășește-ți energia cu universul</p>
          </div>

          {/* Card pentru crearea postării cu design îmbunătățit */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 mb-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-12 h-12 rounded-full mr-4 border-2 border-purple-200 shadow-md object-cover" 
              />
              <div>
                <div className="font-semibold text-gray-800">{currentUser.name}</div>
                <div className="text-sm text-purple-600 font-medium">{currentUser.zodiac}</div>
              </div>
            </div>
            
            <div className="mb-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                <span className="font-medium">Inspirație cosmică:</span>
              </div>
              <div className="text-purple-700 font-medium">{prompt}</div>
            </div>
            
            <textarea
              className="w-full rounded-2xl border-2 border-purple-200 p-4 focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none bg-white/50 backdrop-blur-sm transition-all duration-200"
              rows={3}
              placeholder="Scrie ceva frumos pentru universul tău..."
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            
            <div className="flex justify-between items-center mt-4">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" 
                onClick={handleCreatePost} 
                disabled={!content.trim()}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Postează
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-full"
                onClick={() => setPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)])}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Altă inspirație
              </Button>
            </div>
          </div>

          {/* Lista de postări */}
          <div className="space-y-6">
            {posts.map((post) => (
              <DestinyPostCard 
                key={post.id} 
                post={post} 
                onReact={(t) => handleReactToPost(post.id, t)}
                onPostClick={() => handlePostClick(post)}
              />
            ))}
          </div>

          {/* Modal pentru detaliile postării */}
          <DestinyPostModal
            post={selectedPost}
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setSelectedPost(null);
            }}
            onReact={handleModalReact}
          />
        </div>
      </div>
    </Layout>
  );
}
