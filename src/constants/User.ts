import { Comment, Provider } from "@/interfaces/User";


export const fakeProviders: Provider[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "This is a great post! Really enjoyed reading it.",
    phoneNumber: "2712833731",
    createdAt: new Date("2024-01-15T10:30:00"),
    updatedAt: new Date("2024-01-15T10:30:00"),
    address: "123 Main St, Anytown, USA",
    type: "organization"
  },
]

export const fakeComments: Comment[] = [
  {
    id: "1",
    content: "This is a great post! Really enjoyed reading it.",
    userId: "user123",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    username: "JohnDoe",
    createdAt: new Date("2024-01-15T10:30:00"),
    updatedAt: new Date("2024-01-15T10:30:00"),
    foodId: "1",

  },
  {
    id: "2", 
    content: "Thanks for sharing your insights!",
    userId: "user456",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    username: "JaneSmith",
    createdAt: new Date("2024-01-15T11:15:00"),
    updatedAt: new Date("2024-01-15T11:15:00"),
    foodId: "2",
  },
  {
    id: "3",
    content: "Very informative, looking forward to more content like this.",
    userId: "user789",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    username: "BobWilson",
    createdAt: new Date("2024-01-15T12:00:00"),
    updatedAt: new Date("2024-01-15T12:00:00"),
    foodId: "3",
  }
];