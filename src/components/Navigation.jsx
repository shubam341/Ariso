import React from 'react';
import { Home, Search, ShoppingBag, Plus, Bell, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/', effect: 'hover:scale-125 hover:text-pink-500' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop', effect: 'hover:rotate-12 hover:text-purple-500' },
    { icon: Plus, label: 'Add Post', path: '/add-post', effect: 'hover:scale-125 hover:animate-bounce text-pink-500' },
    { icon: Bell, label: 'Notifications', path: '/notifications', effect: 'hover:animate-pulse hover:text-yellow-500' },
    { icon: User, label: 'Profile', path: '/profile', effect: 'hover:scale-110 hover:text-green-500' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center py-2 space-x-2 sm:space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 ease-in-out
                  ${isActive ? 'text-pink-500 scale-110 drop-shadow-md' : 'text-gray-600'}
                  ${item.effect}`}
              >
                <Icon className="w-7 h-7 transition-all duration-300" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
