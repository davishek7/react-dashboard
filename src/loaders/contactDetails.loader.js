import { apiFetch } from "../utils/api";

export async function contactDetails({ params }){

    const headers = {
        "Content-Type": "application/json",
    };

    const response = await apiFetch(`admin/contact/${params.id}`, {headers})
    const responseData = await response.json()
    const data = await responseData.data

    if (!data.read_status){
        await apiFetch(`admin/contact/${params.id}`, {
            method: "PATCH",
            headers
        })
    }

    return data
}