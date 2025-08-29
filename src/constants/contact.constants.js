export const CONTACT_COLUMNS = [
  { header: "ID", accessorKey: "id" },
  { header: "Full Name", accessorKey: "full_name" },
  { header: "Email", accessorKey: "email" },
  { header: "From App", accessorKey: "from_app" },
  { header: "Received On", accessorKey: "created_at" }
];

export const CONTACT_ACTIONS = [
  {
    label: "View",
    className: "btn-outline-success",
  },
];

export const TRASHED_CONTACT_COLUMNS = [
  { header: "ID", accessorKey: "id" },
  { header: "Full Name", accessorKey: "full_name" },
  { header: "Email", accessorKey: "email" },
  { header: "Deleted At", accessorKey: "deleted_at" }
];

export const TRASHED_CONTACT_ACTIONS = [
  {
    label: "Restore",
    className: "btn-outline-success",
    icon: "fa-solid fa-trash-arrow-up text-success"
  },
    {
    label: "Delete",
    className: "btn-danger",
    icon: "fa-solid fa-trash text-danger"
  }
];