import { ApiResponse } from "@/interfaces/Api";

export const likePost = async (postId: string, userId: string) => {
  const response: ApiResponse<boolean> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/like`, {
    method: "POST",
    body: JSON.stringify({ userId, postId }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()).catch((err) => {
    console.error(err);
    return { success: false, message: "Failed to like post" };
  });

  if (!response.success) {
    throw new Error("Failed to like post");
  }

  return response.data;
};
