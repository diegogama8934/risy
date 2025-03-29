import { ApiResponse } from "@/interfaces/Api";
import { Post } from "@/interfaces/Post";


export async function createPost(post: Post) {
  const response: ApiResponse<Post> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}