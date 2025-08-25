import { API_URL } from "../constants/api.constants";

export async function forgotPasswordAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const response = await fetch(`${API_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  const responseData = await response.json();

  return responseData;
}