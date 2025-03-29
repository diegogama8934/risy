import { Post, FoodCategory } from "@/interfaces/Post";

export const fakePosts: Post[] = [
  {
    id: "1",
    category: FoodCategory.Compost,
    description: "Slightly bruised apples that are still good for composting. Available for pickup in the Seattle area.",
    title: "Bruised Apples for Composting",
    images: [
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
      "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg",
    ],
    userId: "user123",
    comments: [
      { 
        content: "Is this still available?", 
        id: "comment1", 
        userId: "user456", 
        userImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        username: "GreenThumb" 
      },
      { 
        content: "I can pick up tomorrow!", 
        id: "comment2", 
        userId: "user789", 
        userImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
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
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
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
      "https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg",
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    ],
    userId: "user789",
    comments: [
      {
        content: "Do you deliver?",
        id: "comment3",
        userId: "user123",
        userImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        username: "BreadLover"
      }
    ],
    userInterested: false,
    goToProvider: false,
    createdAt: new Date("2024-03-16"),
    updatedAt: new Date("2024-03-16"),
  },
];