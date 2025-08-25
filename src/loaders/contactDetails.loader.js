import { apiFetch } from "../utils/api";

export async function contactDetails({ params }){

    const headers = {
        "Content-Type": "application/json",
    };

    const response = await apiFetch(`admin/contact/${params.id}`, {headers})
    const responseData = await response.json()
    const data = await responseData.data

    if (!data.read_status){
        await apiFetch(`http://127.0.0.1:8000/api/admin/contact/${params.id}`, {
            method: "PATCH",
            headers
        })
    }

    return data
}