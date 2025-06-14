
export type DestinyReactionType = "star" | "sun" | "moon";

export interface DestinyReaction {
  type: DestinyReactionType;
  count: number;
}

export interface DestinyPost {
  id: number;
  author: DestinyProfileUser;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  reactions: DestinyReaction[];
  date: string;
}

export interface DestinyProfileUser {
  id: number;
  name: string;
  zodiac: string;
  avatar: string;
  bio: string;
  following: boolean;
}
