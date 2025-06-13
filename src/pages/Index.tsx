import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProfileCard from '../components/ProfileCard';
import MatchCard from '../components/MatchCard';

const Index = () => {
  const profiles = [
    {
      id: 1,
      name: "Luna",
      age: 26,
      location: "2 miles away",
      bio: "Artist and yoga instructor. Love exploring new places and meeting creative people.",
      photos: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face"
      ],
      interests: ["Art", "Yoga", "Travel", "Photography"]
    },
    {
      id: 2,
      name: "Jake",
      age: 29,
      location: "5 miles away",
      bio: "Software engineer who loves rock climbing and craft beer. Always up for an adventure!",
      photos: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face"
      ],
      interests: ["Climbing", "Beer", "Technology", "Hiking"]
    }
  ];

  const matches = [
    {
      id: 3,
      name: "Mia",
      age: 24,
      location: "1 mile away",
      bio: "Student and coffee lover. Looking for someone to explore the city with.",
      photos: [
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936e63?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1488426862026-3ee9233d0980?w=400&h=600&fit=crop&crop=face"
      ],
      interests: ["Coffee", "Reading", "Movies", "Travel"]
    },
    {
      id: 4,
      name: "Ben",
      age: 31,
      location: "3 miles away",
      bio: "Musician and foodie. Passionate about live music and trying new restaurants.",
      photos: [
        "https://images.unsplash.com/photo-1544005313-94ddf02864ca?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=600&fit=crop&crop=face"
      ],
      interests: ["Music", "Food", "Concerts", "Cooking"]
    }
  ];

  return (
    <Layout>
      <div className="px-4">
        <Hero />

        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            New Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </section>

        <section id="matches" className="py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Potential Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
