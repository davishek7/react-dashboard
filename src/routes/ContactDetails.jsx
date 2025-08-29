import React from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { apiFetch } from "../utils/api";
import { toast } from "react-toastify";


function ContactDetails() {
  const data = useLoaderData();
  const navigate = useNavigate()

  const handleDelete = async() =>{
    const res = await apiFetch(`admin/contact/${data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json()
    if(resData.status === 200){
      toast.success(resData.message)
      navigate("/contacts")
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
              <h2 className="fw-bold mb-1">{data.subject}</h2>
              <h5 className="text-muted">{data.email}</h5>
            </div>
          </div>

          {/* Meta Info with centered dot */}
          <p className="text-muted mb-4 d-flex align-items-center">
            <span>{data.full_name}</span>
            <span className="mx-2">&middot;</span>
            <span>{data.created_at}</span>
          </p>

          {/* Blog Content */}
          <div className="mb-4 overflow-auto" style={{ maxHeight: "500px" }}>
            <MDEditor.Markdown
              source={data.message}
              className="bg-white text-dark p-3 rounded shadow-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <Link to="/contacts" className="btn btn-outline-primary btn-sm">
              <i className="fa-solid fa-arrow-left"></i> Back to Contact List
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

export default ContactDetails;
