import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  UserPlus,
  ExternalLink,
  Images,
  ShoppingBag,
  ShoppingCart,
  ArrowLeft, // back icon
} from "lucide-react";
import { posts } from "../data/posts";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [inCart, setInCart] = useState(false);

  // comments
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post?.commentsData || []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), user: "You", text: newComment, time: "Just now" },
      ]);
      setNewComment("");
    }
  };

  return (
     <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Back Arrow */}
      <div className="flex items-center p-4 bg-white">
        <button
          onClick={() => navigate(-1)} // go back
          className="p-2 hover:bg-gray-100 rounded-full"
          title="Back"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Product Content */}
      <div className="flex-1 overflow-y-auto">
        {/* User Info */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-4">
            <img
              src={post.user.profilePicture}
              alt={post.user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">{post.user.name}</h2>
              <p className="text-gray-500 text-sm">
                {post.user.followers.toLocaleString()} followers
              </p>
              <p className="text-gray-600 text-sm mt-1">{post.user.bio}</p>
            </div>
          </div>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2 ${
              isFollowing
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-pink-500 text-white hover:bg-pink-600"
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>{isFollowing ? "Following" : "Follow"}</span>
          </button>
        </div>

        {/* Product Image */}
        <div className="relative">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </div>

        {/* Actions + Info */}
        <div className="p-6 space-y-6 bg-white">
          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isLiked ? "fill-pink-500 text-pink-500" : ""
                  }`}
                />
                <span>{post.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-6 h-6" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                <Share className="w-6 h-6" />
                <span>{post.shares}</span>
              </button>
            </div>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="text-gray-600 hover:text-purple-500 transition-colors"
              title="Save to Wishlist"
            >
              <Bookmark
                className={`w-6 h-6 ${
                  isSaved ? "fill-purple-500 text-purple-500" : ""
                }`}
              />
            </button>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-3">
              <ShoppingBag className="w-5 h-5" /> Product Details
            </h3>
            <p className="text-gray-700">
              {post.details ||
                "This product is crafted with premium quality material ensuring durability and style."}
            </p>
          </div>

          {/* All Images */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-3">
              <Images className="w-5 h-5" /> View All Images
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {post.extraImages?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="extra"
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Buy + Add to Cart */}
          {post.isProductTagged && post.productLink && (
            <div className="flex gap-4">
              <a
                href={post.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600"
              >
                <span>Buy Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setInCart(!inCart)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded ${
                  inCart
                    ? "bg-gray-200 text-gray-700"
                    : "bg-purple-500 text-white hover:bg-purple-600"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{inCart ? "Added to Cart" : "Add to Cart"}</span>
              </button>
            </div>
          )}
        </div>

        {/* Comments Section at Bottom */}
        <div className="p-6 border-t bg-white">
          <h3 className="font-semibold text-lg mb-4">
            Comments ({comments.length})
          </h3>
          <form onSubmit={handleCommentSubmit} className="mb-6 flex space-x-3">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
            >
              Post
            </button>
          </form>

          <div className="space-y-4 max-h-80 overflow-y-auto">
            {comments.map((c) => (
              <div key={c.id} className="flex space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">{c.user}</p>
                  <p className="text-gray-700 text-sm">{c.text}</p>
                  <p className="text-gray-400 text-xs">{c.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
