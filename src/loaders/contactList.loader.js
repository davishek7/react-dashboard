import { apiFetch } from "../utils/api"

export async function contactListLoader(){
    const headers = {
        "Content-Type": "applicatioin/json",
    }

    const response = await apiFetch("admin/contact/", { headers })
    const responseData = await response.json()
    const data = await responseData.data
    const initialRows = data.contacts
    const total = data.total
    const limit = data.limit

    return {initialRows, total, limit}
}