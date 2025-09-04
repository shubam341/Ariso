import React, { useState } from 'react';
import { Settings, Grid, Heart, Bookmark, UserPlus } from 'lucide-react';
import { currentUser, posts } from '../data/posts';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const userPosts = posts.filter(post => post.user.id === currentUser.id);

  const tabs = [
    { id: 'posts', label: 'Posts', icon: Grid },
    { id: 'liked', label: 'Liked', icon: Heart },
    { id: 'saved', label: 'Saved', icon: Bookmark }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white shadow-sm">
        {/* Profile Header */}
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Profile</h1>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex items-center gap-6 mb-6">
            <img
              src={currentUser.profilePicture}
              alt={currentUser.name}
              className="w-20 h-20 rounded-full object-cover shadow-sm"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">{currentUser.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{currentUser.bio}</p>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="font-semibold text-base text-gray-900">{currentUser.posts}</p>
                  <p className="text-gray-500 text-xs">Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-base text-gray-900">{currentUser.followers.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-base text-gray-900">{currentUser.following}</p>
                  <p className="text-gray-500 text-xs">Following</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-100 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Edit Profile
            </button>
            <button className="flex-1 bg-gray-100 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Share Profile
            </button>
            <button className="px-4 bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition">
              <UserPlus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'border-gray-800 text-gray-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-3 gap-2">
            {userPosts.length > 0 ? (
              userPosts.map((post) => (
                <div
                  key={post.id}
                  className="aspect-square bg-gray-100 rounded-md overflow-hidden hover:scale-[1.02] transition"
                >
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <Grid className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 text-base font-medium">No posts yet</p>
                <p className="text-gray-400 text-sm">Share your first post to get started</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'liked' && (
          <div className="text-center py-12">
            <Heart className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 text-base font-medium">No liked posts</p>
            <p className="text-gray-400 text-sm">Posts you like will appear here</p>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-12">
            <Bookmark className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 text-base font-medium">No saved posts</p>
            <p className="text-gray-400 text-sm">Save posts to view them later</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
