import { ApiResponse } from "@/interfaces/Api";

export async function uploadImage({ formData, postId }: { formData: FormData, postId: string }) {

  const response: ApiResponse<{ photoUrls: string[], message: string }> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/image`, {
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}