// src/pages/HomePage.jsx
import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import CategoryTabs from '../components/CategoryTabs';
import { posts, categories } from '../data/posts';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Posts Feed - Grid Layout */}
      <div className="w-full py-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
