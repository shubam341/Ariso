// src/pages/ShopPage.jsx
import React from "react";
import { Heart, MessageCircle, Star, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: "₹1,499",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    seller: "Aarav Sharma",
    sellerImg: "https://randomuser.me/api/portraits/men/32.jpg",
    likes: 230,
    reviews: 42,
  },
  {
  id: 2,
  name: "Handmade Necklace",
  price: "₹799",
  image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=600",
  seller: "Riya Kapoor",
  sellerImg: "https://randomuser.me/api/portraits/women/44.jpg",
  likes: 180,
  reviews: 35,
},

  {
    id: 3,
    name: "Trendy Sneakers",
    price: "₹2,199",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    seller: "Karan Mehta",
    sellerImg: "https://randomuser.me/api/portraits/men/46.jpg",
    likes: 310,
    reviews: 68,
  },
  {
    id: 4,
    name: "Elegant Handbag",
    price: "₹1,899",
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
    seller: "Priya Singh",
    sellerImg: "https://randomuser.me/api/portraits/women/65.jpg",
    likes: 275,
    reviews: 51,
  },
  {
    id: 5,
    name: "Classic Wrist Watch",
    price: "₹3,499",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
    seller: "Rahul Verma",
    sellerImg: "https://randomuser.me/api/portraits/men/12.jpg",
    likes: 420,
    reviews: 95,
  },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-6 px-4">
        🛍️ Shop
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              {/* Seller Info */}
              <div className="flex items-center mb-3">
                <img
                  src={product.sellerImg}
                  alt={product.seller}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {product.seller}
                </span>
              </div>

              {/* Product Info */}
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-pink-600 font-bold text-lg">
                {product.price}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4 text-gray-600">
                <button className="flex items-center space-x-1 hover:text-pink-500 transition">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{product.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{product.reviews}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-yellow-500 transition">
                  <Star className="w-5 h-5" />
                  <span className="text-sm">4.5</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-500 transition">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-sm">Buy</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
