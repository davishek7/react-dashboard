import { apiFetch } from "../utils/api";

export async function editBlogAction({ request, params }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const response = await apiFetch(`admin/blog/${params.slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  const responseData = await response.json();
  return responseData;
}
