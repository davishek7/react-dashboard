import { apiFetch } from "../utils/api"

export async function blogListLoader(){
    const headers = {
        "Content-Type": "applicatioin/json",
    }

    const response = await apiFetch("admin/blog/", { headers })
    const responseData = await response.json()
    const data = await responseData.data
    const initialRows = data.posts                    //.map(({ content, slug, author, ...rest}) => rest)
    const total = data.total
    const limit = data.limit

    return {initialRows, total, limit}
}