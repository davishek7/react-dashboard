import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import TrashedDataTable from "../components/TrashedDataTable";
import {
  TRASHED_CONTACT_COLUMNS,
  TRASHED_CONTACT_ACTIONS,
} from "../constants/contact.constants";
import { apiFetch } from "../utils/api";
import { toast } from "react-toastify";

function TrashedContacts() {
  const { initialRows, total, limit } = useLoaderData();
  const [contacts, setContacts] = useState(initialRows);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(total / limit);

  const fetchPage = async (newPage) => {
    const offset = (newPage - 1) * limit;
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await apiFetch(
      `admin/trash/contact?limit=${limit}&offset=${offset}`,
      { headers }
    );
    const responseData = await res.json();
    const data = await responseData.data;

    setContacts(data.trashed_contacts);
    setPage(newPage);
  };

  const handleRestore = async (itemKey) => {
    const res = await apiFetch(`admin/trash/contact/restore/${itemKey}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.status !== 200) {
      toast.error(resData.message);
    }
    setContacts((prev) => prev.filter((item) => item.id !== itemKey));
    toast.success(resData.message);
    navigate("/trash/contacts");
  };

  const handleDelete = async (itemKey) => {
    const res = await apiFetch(`admin/trash/contact/delete/${itemKey}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.status !== 200) {
      toast.error(resData.message);
    }
    setContacts((prev) => prev.filter((item) => item.id !== itemKey));
    toast.success(resData.message);
    navigate("/trash/contacts");
  };

  return (
    <div className="mt-3">
      <div className="clearfix">
        <h2 className="text-xl font-bold mb-3 float-start">Trashed Contacts</h2>
      </div>
      <TrashedDataTable
        columns={TRASHED_CONTACT_COLUMNS}
        data={contacts}
        actions={TRASHED_CONTACT_ACTIONS}
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

export default TrashedContacts;
