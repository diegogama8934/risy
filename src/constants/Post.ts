import { Post, FoodCategory } from "@/interfaces/Post";

export const fakePosts: Post[] = [
  {
    id: "1",
    category: FoodCategory.Compost,
    description: "Slightly bruised apples that are still good for composting. Available for pickup in the Seattle area.",
    title: "Bruised Apples for Composting",
    images: [
      "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e",
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
    ],
    userId: "user123",
    comments: [
      { 
        content: "Is this still available?", 
        id: "comment1", 
        userId: "user456", 
        userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        username: "GreenThumb" 
      },
      { 
        content: "I can pick up tomorrow!", 
        id: "comment2", 
        userId: "user789", 
        userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        username: "CompostQueen" 
      },
    ],
    userInterested: true,
    goToProvider: false,
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    category: FoodCategory.Donation,
    description: "Unopened canned goods from a recent food drive. Must pick up by this weekend.",
    title: "Canned Food Donation",
    images: [
      "https://images.unsplash.com/photo-1584263347416-85a3779133e4",
    ],
    userId: "user456",
    comments: [],
    userInterested: false,
    goToProvider: true,
    createdAt: new Date("2024-03-14"),
    updatedAt: new Date("2024-03-14"),
  },
  {
    id: "3",
    category: FoodCategory.Sale,
    description: "Homemade sourdough bread, baked fresh this morning. $5 each.",
    title: "Fresh Sourdough Bread",
    images: [
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df",
    ],
    userId: "user789",
    comments: [
      {
        content: "Do you deliver?",
        id: "comment3",
        userId: "user123",
        userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        username: "BreadLover"
      }
    ],
    userInterested: false,
    goToProvider: false,
    createdAt: new Date("2024-03-16"),
    updatedAt: new Date("2024-03-16"),
  },
];