import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../constants/api.constants";

export async function emailVerificationLoader({ request }) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  const response = await fetch(
    `${API_URL}/auth/verify-email?token=${token}`
  );
  const responseData = await response.json();

  switch (responseData.status) {
    case 200: // success
    case 208: // already verified
    case 409: // already used
      toast.success(responseData.message);
      return redirect("/auth/login");

    case 404: // invalid link
    case 410: // expired
    default:
      toast.error(responseData.message);
      return redirect("/auth/resend-verification");
  }
}
