import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${post.id}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="w-full bg-white shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer">
      {/* User Info */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.profilePicture}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-xs font-medium">
          {post.category}
        </span>
      </div>

      {/* Post Image */}
      <div className="relative" onClick={handlePostClick}>
        <img
          src={post.image}
          alt="Post"
          className="w-full h-96 object-cover"
        />
        {post.isProductTagged && (
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
            🛍️ Product tagged
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-3">{post.caption}</p>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
              <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <button 
              onClick={handlePostClick}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
              <Share className="w-5 h-5" />
              <span className="text-sm">{post.shares}</span>
            </button>
          </div>
          
          <button
            onClick={handleSave}
            className="text-gray-600 hover:text-purple-500 transition-colors"
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-purple-500 text-purple-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
