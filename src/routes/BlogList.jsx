import { useLoaderData, Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import { useState } from "react";
import { apiFetch } from "../utils/api";
import { BLOG_COLUMNS, BLOG_ACTIONS } from "../constants/blog.constants"

function BlogList() {

  const { initialRows, total, limit } = useLoaderData();
  const [blogs, setBlogs] = useState(initialRows);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(total / limit);

  const fetchPage = async (newPage) => {
    const offset = (newPage - 1) * limit;
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await apiFetch(
      `http://127.0.0.1:8000/api/admin/blog?limit=${limit}&offset=${offset}`,
      { headers }
    );
    const responseData = await res.json();
    const data = await responseData.data;

    setBlogs(data.posts);
    setPage(newPage);
  };

  return (
    <div className="mt-3">
      <div className="clearfix">
        <h2 className="text-xl font-bold mb-3 float-start">Manage Blogs</h2>
        <Link to="/blogs/new" className="btn btn-outline-info float-end">
          <i className="fa-solid fa-plus"></i> Add New Blog
        </Link>
      </div>
      <DataTable
        columns={BLOG_COLUMNS}
        data={blogs}
        actions={BLOG_ACTIONS}
        showPagination={true}
        page={page}
        totalPages={totalPages}
        fetchPage={fetchPage}
      />
    </div>
  );
}

export default BlogList;
