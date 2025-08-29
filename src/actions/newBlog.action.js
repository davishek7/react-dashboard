import { apiFetch } from "../utils/api"

export async function newBlogAction({ request }){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

const response = await apiFetch("admin/blog/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const responseData = await response.json();
    return responseData
}