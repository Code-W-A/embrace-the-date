
import { useState } from "react";
import DestinyPostCard from "../components/DestinyPostCard";
import { DestinyPost, DestinyProfileUser } from "../types/destiny";
import { Button } from "../components/ui/button";

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

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text animate-fade-in">
        Calea Destinului
      </h1>
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <div className="mb-2 text-sm text-gray-500 text-center">Sugestie: <span className="font-medium text-gray-700">{prompt}</span></div>
        <textarea
          className="w-full rounded-lg border border-gray-200 p-3 focus:ring-2 focus:ring-purple-400 resize-none"
          rows={3}
          placeholder="Scrie ceva..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div className="flex justify-between items-center mt-2">
          <Button className="px-6" onClick={handleCreatePost} disabled={!content.trim()}>Postează</Button>
          <Button variant="ghost" size="sm" onClick={() => setPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)])}>Altă sugestie</Button>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <DestinyPostCard key={post.id} post={post} onReact={(t) => handleReactToPost(post.id, t)} />
        ))}
      </div>
    </div>
  );
}
