import { API_URL } from "../constants/api.constants";

export async function passwordResetAction({ request }) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const response = await fetch(
    `${API_URL}/auth/reset-password?token=${token}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    }
  );
  const responseData = await response.json();
  console.log(responseData);

  if (responseData.status !== 200) {
    return { message: responseData.message };
  }

  return responseData;
}
