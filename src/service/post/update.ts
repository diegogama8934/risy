import { ApiResponse } from "@/interfaces/Api";
import { Post } from "@/interfaces/Post";

export async function updatePost(id: string, post: Post) {
  const response: ApiResponse<Post> = await fetch(`${process.env.API_URL}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
