import React, { useState } from "react";
import { Upload, ImagePlus } from "lucide-react";

const PostPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Lifestyle");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle image upload preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Dummy submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !caption) {
      alert("Please fill in title and caption!");
      return;
    }
    alert("✅ Post created successfully!");
    setTitle("");
    setCategory("Lifestyle");
    setCaption("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          >
            <option>Lifestyle</option>
            <option>Travel</option>
            <option>Technology</option>
            <option>Fashion</option>
            <option>Food</option>
            <option>Sports</option>
          </select>
        </div>

        {/* Caption */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write something about your post..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none resize-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-pink-400 transition">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-full h-80 object-cover rounded-lg"
              />
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <ImagePlus className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-gray-500">Choose an image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition"
        >
          <Upload className="w-5 h-5" /> Publish Post
        </button>
      </form>
    </div>
  );
};

export default PostPage;
