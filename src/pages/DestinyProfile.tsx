
import { useParams } from "react-router-dom";
import { DestinyProfileUser } from "../types/destiny";
import { Button } from "../components/ui/button";
import { useState } from "react";

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

export default function DestinyProfile() {
  const { userId } = useParams<{ userId: string }>();
  const user = dummyUsers.find(u => u.id === Number(userId));
  const [rezonat, setRezonat] = useState(user?.following ?? false);
  const [showCompat, setShowCompat] = useState(false);

  if (!user) {
    return <div className="max-w-lg mx-auto py-10 text-center text-red-500">Utilizator inexistent.</div>;
  }

  return (
    <div className="max-w-lg mx-auto py-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mb-2 object-cover" />
        <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
        <div className="mb-2 text-purple-600 font-medium">{user.zodiac}</div>
        <p className="mb-3 text-center text-gray-700">{user.bio}</p>
        <div className="flex gap-4 mb-4">
          <Button variant={rezonat ? "secondary" : "default"} onClick={() => setRezonat(r => !r)}>
            {rezonat ? "Rezonezi deja" : "Rezonez"}
          </Button>
          <Button variant="ghost" onClick={() => setShowCompat(c => !c)}>
            Vezi compatibilitatea
          </Button>
        </div>
        {showCompat && (
          <div className="w-full text-center mt-2 p-3 rounded-lg bg-purple-100 text-purple-700 animate-fade-in font-semibold">
            Compatibilitatea voastră: <span className="font-extrabold">78%</span><br />
            Conexiune bună între <span className="capitalize">{user.zodiac}</span> și zodia ta!
          </div>
        )}
      </div>
    </div>
  );
}
