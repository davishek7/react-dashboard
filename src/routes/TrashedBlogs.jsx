import { useState } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import {
  TRASHED_BLOG_COLUMNS,
  TRASHED_BLOG_ACTIONS,
} from "../constants/blog.constants";
import TrashedDataTable from "../components/TrashedDataTable";
import { apiFetch } from "../utils/api";
import { toast } from "react-toastify";

function TrashedBlogs() {
  const navigate = useNavigate();
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
      `admin/trash/blog?limit=${limit}&offset=${offset}`,
      { headers }
    );
    const responseData = await res.json();
    const data = await responseData.data;

    setBlogs(data.trashed_blogs);
    setPage(newPage);
  };

  const handleRestore = async (itemKey) => {
    const res = await apiFetch(`admin/trash/blog/restore/${itemKey}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.status !== 200) {
      toast.error(resData.message);
    }
    setBlogs((prev) => prev.filter((item) => item.slug !== itemKey));
    toast.success(resData.message);
    navigate("/trash/blogs");
  };

  const handleDelete = async (itemKey) => {
    const res = await apiFetch(`admin/trash/blog/delete/${itemKey}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.status !== 200) {
      toast.error(resData.message);
    }
    setBlogs((prev) => prev.filter((item) => item.slug !== itemKey));
    toast.success(resData.message);
    navigate("/trash/blogs");
  };

  return (
    <div className="mt-3">
      <div className="clearfix">
        <h2 className="text-xl font-bold mb-3 float-start">Trashed Blogs</h2>
      </div>
      <TrashedDataTable
        columns={TRASHED_BLOG_COLUMNS}
        data={blogs}
        actions={TRASHED_BLOG_ACTIONS}
        onRestore={handleRestore}
        onDelete={handleDelete}
        showPagination={true}
        page={page}
        totalPages={totalPages}
        fetchPage={fetchPage}
      />
    </div>
  );
}

export default TrashedBlogs;
