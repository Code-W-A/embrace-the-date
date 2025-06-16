
export interface Notification {
  id: number;
  type: 'reaction' | 'comment' | 'follow' | 'newPost';
  userId: number;
  userName: string;
  userAvatar: string;
  postId?: number;
  message: string;
  date: string;
  read: boolean;
}
