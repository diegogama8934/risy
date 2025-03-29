export interface IUser {
  id?: string;
  name: string;
  email: string;
  photo_url?: string;
  phoneNumber: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: "publicuser" | "organization";
  password: string;
}


export interface Provider {
  id?: string;
  name: string;
  email: string;
  image?: string;
  description?: string;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
  address: string;
  type: "organization";
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
