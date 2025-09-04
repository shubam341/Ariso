import React from 'react';
import { Search, TrendingUp, Heart, Share2, ShoppingBag, UserPlus } from 'lucide-react';

const trendingTags = [
  { tag: '#SummerVibes', posts: '2.5K posts' },
  { tag: '#TechTrends', posts: '1.8K posts' },
  { tag: '#FoodieLife', posts: '3.2K posts' },
  { tag: '#TravelGoals', posts: '4.1K posts' },
];

const explorePosts = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?w=600',
    alt: 'Beach vibes',
    user: { name: 'Sophia', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600',
    alt: 'Laptop and coffee',
    user: { name: 'David', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=600',
    alt: 'Delicious food',
    user: { name: 'Aarav', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/21014/pexels-photo.jpg?w=600',
    alt: 'Mountain adventure',
    user: { name: 'Emma', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600',
    alt: 'Street fashion',
    user: { name: 'Liam', avatar: 'https://randomuser.me/api/portraits/men/77.jpg' },
  },
];

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="p-4">
          <h1 className="text-xl font-semibold bg-black-50 mb-4">Explore</h1>
          <div className="relative">
            <Search className="absolute bg-black-50 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts, users, tags..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Trending Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-semibold">Trending</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trendingTags.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <p className="font-medium text-gray-800">{item.tag}</p>
                <p className="text-sm text-gray-500">{item.posts}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {explorePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 p-4">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-semibold text-gray-800">{post.user.name}</p>
              </div>

              {/* Post Image */}
              <img
                src={post.img}
                alt={post.alt}
                className="w-full h-64 object-cover"
              />

              {/* Actions */}
              <div className="flex justify-around items-center py-3 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500">
                  <Heart className="w-5 h-5" /> Like
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                  <Share2 className="w-5 h-5" /> Share
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
                  <ShoppingBag className="w-5 h-5" /> Shop
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-500">
                  <UserPlus className="w-5 h-5" /> Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
