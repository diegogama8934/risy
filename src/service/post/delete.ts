import { ApiResponse } from "@/interfaces/Api";
import { Post } from "@/interfaces/Post";

export async function deletePost(id: string) {
  const response: ApiResponse<Post> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
