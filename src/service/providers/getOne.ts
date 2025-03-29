import { ApiResponse } from "@/interfaces/Api";
import { Post } from "@/interfaces/Post";
import { Provider } from "@/interfaces/User";

interface ProviderResponse extends Provider {
  posts: Post[];
}

export async function getProvider(id: string) {
  const response: ApiResponse<ProviderResponse> = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/providers/${id}`, {
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
