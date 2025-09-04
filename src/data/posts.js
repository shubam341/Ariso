export const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Sarah Johnson",
      profilePicture: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150",
      followers: 12500,
      following: 890,
      bio: "Fashion enthusiast & lifestyle blogger ✨"
    },
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=600",
    caption: "Loving this new summer collection! Perfect for beach days ☀️ #SummerVibes #Fashion",
    category: "Fashion",
    likes: 245,
    comments: 28,
    shares: 15,
    timestamp: "2h ago",
    productLink: "https://example.com/summer-dress",
    isProductTagged: true,
    commentsData: [
      { id: 1, user: "Emma Wilson", text: "Absolutely gorgeous! 😍", time: "1h ago" },
      { id: 2, user: "Mike Chen", text: "Love the color combination", time: "45m ago" },
      { id: 3, user: "Lisa Park", text: "Where did you get this dress?", time: "30m ago" }
    ]
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Chef Marco",
      profilePicture: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150",
      followers: 45200,
      following: 234,
      bio: "Professional Chef | Food Lover | Recipe Creator 👨‍🍳"
    },
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600",
    caption: "Homemade pasta with truffle sauce 🍝 Recipe in my bio! #ItalianCuisine #Foodie",
    category: "Food",
    likes: 892,
    comments: 67,
    shares: 34,
    timestamp: "4h ago",
    productLink: "https://example.com/truffle-sauce",
    isProductTagged: true,
    commentsData: [
      { id: 1, user: "Food Lover", text: "This looks incredible! Recipe please?", time: "3h ago" },
      { id: 2, user: "Italian Nonna", text: "Bravissimo! Perfect technique", time: "2h ago" }
    ]
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Travel with Amy",
      profilePicture: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=150",
      followers: 78900,
      following: 1200,
      bio: "✈️ Travel Photographer | 50+ Countries | Adventure Seeker"
    },
    image: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?w=600",
    caption: "Sunset in Santorini never gets old! 🌅 Such a magical place ✨ #Travel #Santorini #Greece",
    category: "Travel",
    likes: 1203,
    comments: 89,
    shares: 45,
    timestamp: "6h ago",
    productLink: null,
    isProductTagged: false,
    commentsData: [
      { id: 1, user: "Wanderlust Soul", text: "Adding this to my bucket list!", time: "5h ago" },
      { id: 2, user: "Greece Explorer", text: "Best sunset spot on the island!", time: "4h ago" }
    ]
  },
  {
    id: 4,
    user: {
      id: 4,
      name: "Beauty Guru Maya",
      profilePicture: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=150",
      followers: 156000,
      following: 456,
      bio: "💄 Makeup Artist | Beauty Tips | Product Reviews"
    },
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?w=600",
    caption: "New skincare routine results after 30 days! ✨ Swipe to see the before & after #Skincare #GlowUp",
    category: "Beauty",
    likes: 2156,
    comments: 234,
    shares: 78,
    timestamp: "1d ago",
    productLink: "https://example.com/skincare-set",
    isProductTagged: true,
    commentsData: [
      { id: 1, user: "Skincare Addict", text: "Your skin is glowing! What products?", time: "20h ago" },
      { id: 2, user: "Beauty Queen", text: "Amazing transformation! 😍", time: "18h ago" }
    ]
  },
  {
    id: 5,
    user: {
      id: 5,
      name: "Tech Geek Rahul",
      profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150",
      followers: 32400,
      following: 560,
      bio: "💻 Tech Reviewer | Gadgets | Coding | Startups"
    },
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?w=600",
    caption: "Just unboxed the latest smartphone 🚀 Full review dropping soon! #TechReview #GadgetLover",
    category: "Lifestyle",
    likes: 980,
    comments: 123,
    shares: 65,
    timestamp: "1d ago",
    productLink: "https://example.com/smartphone",
    isProductTagged: true,
    commentsData: [
      { id: 1, user: "Gadget Girl", text: "Omg looks so sleek 😍", time: "22h ago" },
      { id: 2, user: "CoderMan", text: "Does it support 5G?", time: "20h ago" }
    ]
  },
  {
    id: 6,
    user: {
      id: 6,
      name: "Fitness with Ananya",
      profilePicture: "https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg?w=150",
      followers: 58200,
      following: 740,
      bio: "🏋️ Fitness Coach | Healthy Lifestyle | Motivation"
    },
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=600",
    caption: "Morning workout done ✅ Stay consistent, stay strong 💪 #FitnessJourney #NoExcuses",
    category: "Lifestyle",
    likes: 1750,
    comments: 210,
    shares: 92,
    timestamp: "2d ago",
    productLink: null,
    isProductTagged: false,
    commentsData: [
      { id: 1, user: "FitGuy", text: "This motivates me 🔥", time: "1d ago" },
      { id: 2, user: "HealthNut", text: "Respect for your dedication!", time: "23h ago" }
    ]
  },
  {
    id: 7,
    user: {
      id: 7,
      name: "Art by Sofia",
      profilePicture: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150",
      followers: 42900,
      following: 310,
      bio: "🎨 Digital Artist | Sketches | Creative Mind"
    },
    image: "https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?w=600",
    caption: "Experimenting with new colors and textures 🎨✨ #DigitalArt #CreativeLife",
    category: "Lifestyle",
    likes: 2034,
    comments: 198,
    shares: 102,
    timestamp: "3d ago",
    productLink: null,
    isProductTagged: false,
    commentsData: [
      { id: 1, user: "ArtFan", text: "This is stunning!", time: "2d ago" },
      { id: 2, user: "ColorLover", text: "What brushes did you use?", time: "2d ago" }
    ]
  }
];

export const categories = ["All", "Beauty", "Fashion", "Food", "Travel", "Lifestyle","Wellness"];

export const currentUser = {
  id: 8,
  name: "John Doe",
  profilePicture: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150",
  followers: 890,
  following: 234,
  bio: "Content creator & photography enthusiast 📸",
  posts: 45
};
