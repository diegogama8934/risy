import { ApiResponse } from "@/interfaces/Api";
import { Provider } from "@/interfaces/User";

export async function getProviders() {
  const response: ApiResponse<Provider[]> = await fetch(`${process.env.API_URL}/providers`, {
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
