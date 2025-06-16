
export interface Comment {
  id: number;
  postId: number;
  author: {
    id: number;
    name: string;
    avatar: string;
    zodiac: string;
  };
  content: string;
  date: string;
  reactions: {
    likes: number;
    userLiked: boolean;
  };
}

export interface CommentInput {
  postId: number;
  content: string;
}
