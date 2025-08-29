import { apiFetch } from "../utils/api";

export async function trashedContactsLoader() {
  const headers = {
    "Content-Type": "application/json",
  };

  const res = await apiFetch("admin/trash/contact", { headers });
  const resData = await res.json();
  const data = await resData.data;

  const initialRows = data.trashed_contacts;
  const total = data.total;
  const limit = data.limit;

  return { initialRows, total, limit };
}
