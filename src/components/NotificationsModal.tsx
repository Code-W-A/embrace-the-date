
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { X, Bell, Star, MessageCircle, Users, Sparkles } from "lucide-react";
import { Notification } from "../types/notifications";

interface NotificationsModalProps {
  open: boolean;
  onClose: () => void;
}

const dummyNotifications: Notification[] = [
  {
    id: 1,
    type: 'reaction',
    userId: 2,
    userName: 'Radu',
    userAvatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=128&h=128&fit=crop',
    postId: 1,
    message: 'a reacționat cu ⭐ la postarea ta',
    date: '2025-06-14T14:30:00.000Z',
    read: false
  },
  {
    id: 2,
    type: 'comment',
    userId: 3,
    userName: 'Maria',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=128&h=128&fit=crop',
    postId: 1,
    message: 'a comentat la postarea ta',
    date: '2025-06-14T12:15:00.000Z',
    read: false
  },
  {
    id: 3,
    type: 'follow',
    userId: 4,
    userName: 'Alex',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop',
    message: 'a început să rezoneze cu tine',
    date: '2025-06-14T10:00:00.000Z',
    read: true
  }
];

export default function NotificationsModal({ open, onClose }: NotificationsModalProps) {
  const [notifications, setNotifications] = useState<Notification[]>(dummyNotifications);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Acum";
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    
    return `${Math.floor(diffInHours / 24)}z`;
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'reaction':
        return <Star className="w-4 h-4 text-yellow-500" />;
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'follow':
        return <Users className="w-4 h-4 text-purple-500" />;
      case 'newPost':
        return <Sparkles className="w-4 h-4 text-pink-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] p-0 bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl">
        <DialogHeader className="p-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DialogTitle className="text-lg font-semibold">Notificări</DialogTitle>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {unreadCount}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
                  Marchează toate
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto max-h-96">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Nu ai notificări noi</p>
              <p className="text-sm">Te vom anunța când se întâmplă ceva!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    !notification.read ? 'bg-purple-50/50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex space-x-3">
                    <div className="relative">
                      <img
                        src={notification.userAvatar}
                        alt={notification.userName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{notification.userName}</span>
                            <span className="text-gray-600"> {notification.message}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatTime(notification.date)}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-1 ml-2"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
