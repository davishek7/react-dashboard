import React from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";

function ContactDetails() {
  const data = useLoaderData();
  const navigate = useNavigate()

  return (
    <div className="mt-3">
      <div className="clearfix">
        <h2 className="text-xl font-bold float-start">Contact Details</h2>
        <button onClick={() => navigate(-1)} className="btn btn-outline-info float-end">
          <i className="fa-solid fa-arrow-left"></i>{" "}Back to Contact List
        </button>
      </div>
      <div className="card border-info shadow-lg rounded-lg my-3">
        <div className="card-header"><b>From: </b>{data.email}{" "}({data.from_app})</div>
        <div className="card-body overflow-auto" style={{ maxHeight: "625px" }}>
          <h5 className="card-title">{data.subject}</h5>
          <hr />
          <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>{data.message}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
