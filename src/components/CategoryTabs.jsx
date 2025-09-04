import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const navigate = useNavigate();
  const specialCategories = ["Explore", "Following", "Nearby"];

  const handleCategoryClick = (category) => {
    if (category === "Explore") {
      navigate("/explore"); // Navigate to Explore page
    } else {
      onCategoryChange(category);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      {/* Row 1: Special Categories */}
      <div className="flex justify-center space-x-4 py-3 border-b border-gray-200 max-w-6xl mx-auto px-4">
        {specialCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
              activeCategory === category
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Row 2: Scrollable Categories */}
      <div className="overflow-x-auto whitespace-nowrap py-3 border-t border-gray-200">
        <div className="flex space-x-3 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
