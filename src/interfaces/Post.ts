export interface Post {
  id?: string;
  images: string[];
  title: string;
  description: string;
  category: FoodCategory;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
  comments: Comment[];
  goToProvider: boolean;
  userInterested: boolean;
  price?: number;
  originalPrice?: number;
}

export enum FoodCategory {
  Compost = 1,
  Donation = 2,
  Sale = 3,
}


export interface Comment {
  id: string;
  userId: string;
  userImage: string;
  username: string;
  content: string;
}