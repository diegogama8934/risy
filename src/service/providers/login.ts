import { ApiResponse } from "@/interfaces/Api";
import { Provider } from "@/interfaces/User";

export async function loginProvider(provider: { email: string, password: string}) {
  const response: ApiResponse<Provider> = await fetch(`${process.env.API_URL}/providers/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(provider),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err.message));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
