import { ApiResponse } from "@/interfaces/Api";
import { Post, Comment } from "@/interfaces/Post";
import { Provider } from "@/interfaces/User";


interface PostResponse extends Post{
  provider: Provider;
  comments: Comment[];
  photoUrls: string[];
}

export async function getPost(id: string) {
  const response: ApiResponse<PostResponse> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
