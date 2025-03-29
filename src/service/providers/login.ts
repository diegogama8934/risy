import { ApiResponse } from "@/interfaces/Api";
import { Provider } from "@/interfaces/User";

export async function loginProvider(provider: Provider) {
  const response: ApiResponse<Provider> = await fetch(`${process.env.API_URL}/providers/login`, {
    method: "POST",
    body: JSON.stringify(provider),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
