import { ApiResponse } from "@/interfaces/Api";
import { Comment } from "@/interfaces/User";

export const postComment = async (payload: { postId: number, content: string, userId: string }) => {
  const response: ApiResponse<Comment> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
};
