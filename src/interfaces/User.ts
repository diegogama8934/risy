export interface Provider {
  id: string;
  name: string;
  email: string;
  image: string;
  description: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
}


export interface Comment {
  id: string;
  content: string;
  userId: string;
  userImage: string;
  foodId: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
