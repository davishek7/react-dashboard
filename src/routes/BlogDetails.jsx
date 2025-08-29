import { useState } from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { apiFetch } from "../utils/api";
import { toast } from "react-toastify";

function BlogDetails() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [isActive, setIsActive] = useState(data.is_active);

  const handleToggle = async () => {
    const newStatus = !isActive;
    setIsActive(newStatus);

    const res = await apiFetch(`admin/blog/${data.slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.status === 200) {
      toast.success(resData.message);
    } else {
      toast.error(resData.message);
      setIsActive(!newStatus); // rollback if failed
    }
  };

  const handleDelete = async() => {
    const res = await apiFetch(`admin/blog/${data.slug}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json()
    if(resData.status === 200){
      toast.success(resData.message)
      navigate("/blogs")
    } else {
      toast.error(resData.message)
    }
  }

  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body p-4">
          {/* Title + Status Toggle */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="fw-bold mb-1">{data.title}</h2>
              <h5 className="text-muted">{data.subtitle}</h5>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckChecked"
                checked={isActive}
                onChange={handleToggle}
              />
              <label
                className="form-check-label ms-2"
                htmlFor="switchCheckChecked"
              >
                {isActive ? "Published" : "Draft"}
              </label>
            </div>
          </div>

          {/* Meta Info with centered dot */}
          <p className="text-muted mb-4 d-flex align-items-center">
            <span>{data.author.username}</span>
            <span className="mx-2">&middot;</span>
            <span>{data.created_at}</span>
          </p>

          {/* Blog Content */}
          <div className="mb-4 overflow-auto" style={{ maxHeight: "500px" }}>
            <MDEditor.Markdown
              source={data.content}
              className="bg-white text-dark p-3 rounded shadow-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <Link to="/blogs" className="btn btn-outline-primary btn-sm">
              <i className="fa-solid fa-arrow-left"></i> Back to Blog List
            </Link>
            <Link to={`/blogs/edit/${data.slug}`} className="btn btn-outline-success btn-sm">
              <i className="fa-solid fa-pen-to-square me-2"></i> Edit
            </Link>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>
              <i className="fa-solid fa-trash me-2"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
