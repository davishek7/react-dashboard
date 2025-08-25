import { apiFetch } from "../utils/api";

export async function homeLoader() {

    const headers = {
        "Content-Type": "application/json",
    };

    const [blogRes, contactRes] = await Promise.all([
        apiFetch("admin/blog/", {headers}),
        apiFetch("admin/contact", {headers}),
    ]);

    const blogResData = await blogRes.json()
    const blogData = await blogResData.data
    const blogs = blogData.posts

    const contactResData = await contactRes.json()
    const contactData = await contactResData.data
    const contacts = contactData.contacts

    return { blogs, contacts }
}