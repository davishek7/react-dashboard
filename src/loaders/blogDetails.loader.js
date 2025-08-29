import { apiFetch } from "../utils/api";

export async function blogDetails({ params }){

    const headers = {
        "Content-Type": "application/json",
    };

    const response = await apiFetch(`admin/blog/${params.slug}`, {headers})
    const responseData = await response.json()
    const data = await responseData.data

    return data
}