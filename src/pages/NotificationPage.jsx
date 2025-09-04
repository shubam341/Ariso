import React from "react";
import { Heart, MessageCircle, UserPlus, Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    text: "Sophia liked your post",
    time: "2m ago",
    icon: <Heart className="w-5 h-5 text-pink-500" />,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    type: "comment",
    text: "David commented: 🔥🔥",
    time: "10m ago",
    icon: <MessageCircle className="w-5 h-5 text-blue-500" />,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    type: "follow",
    text: "Emma started following you",
    time: "30m ago",
    icon: <UserPlus className="w-5 h-5 text-green-500" />,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    type: "like",
    text: "Liam liked your photo",
    time: "1h ago",
    icon: <Heart className="w-5 h-5 text-pink-500" />,
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center gap-2 p-4">
          <Bell className="w-6 h-6 text-pink-500" />
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
      </div>

      {/* Notification list */}
      <div className="divide-y divide-gray-200">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={n.avatar}
                alt="user avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-medium">{n.text}</p>
                <p className="text-sm text-gray-500">{n.time}</p>
              </div>
            </div>
            <div>{n.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
