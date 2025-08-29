import { apiFetch } from "../utils/api";

export async function trashedBlogsLoader() {
  const headers = {
    "Content-Type": "application/json",
  };

  const res = await apiFetch("admin/trash/blog", { headers });
  const resData = await res.json();
  const data = await resData.data;
  console.log(data);

  const initialRows = data.trashed_blogs;
  const total = data.total;
  const limit = data.limit;

  return { initialRows, total, limit };
}
