import React from 'react';
import { Search, MessageCircle, ShoppingCart, Gem } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="max-w-1xl  py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="w-12 h-8 bg-gradient-to-tr from-pink-500 via-purple-900 to-indigo-900 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300">
              <Gem className="w-6 h-5 text-white" />
            </div>
            <h1 className="text-4xl font-heading font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wide">
              Ariso
            </h1>
          </div>

          {/* Search Bar */}
          {/* Search Bar */}
<div className="flex-1 max-w-md mx-8">
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="text"
      placeholder="Search for posts, users..."
      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
    />
  </div>
</div>

          {/* Right Section (Cart + Messages) */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative transition duration-200 hover:scale-110">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-pink-500" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Messages */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative transition duration-200 hover:scale-110">
              <MessageCircle className="w-6 h-6 text-gray-600 hover:text-pink-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
