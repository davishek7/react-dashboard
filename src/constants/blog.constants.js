export const BLOG_COLUMNS = [
  { header: "ID", accessorKey: "id" },
  { header: "Title", accessorKey: "title" },
  { header: "Subtitle", accessorKey: "subtitle" },
  { header: "Created At", accessorKey: "created_at" },
  { header: "Status", accessorKey: "is_active" },
];

export const BLOG_ACTIONS = [
  {
    label: "View",
    className: "btn-outline-success",
  },
];

export const TRASHED_BLOG_COLUMNS = [
  { header: "ID", accessorKey: "id" },
  { header: "Title", accessorKey: "title" },
  { header: "Deleted At", accessorKey: "deleted_at" },
];

export const TRASHED_BLOG_ACTIONS = [
  {
    label: "Restore",
    className: "btn-outline-success",
    icon: "fa-solid fa-trash-arrow-up text-success"
  },
  {
    label: "Delete",
    className: "btn-danger",
    icon: "fa-solid fa-trash text-danger"
  },
];
