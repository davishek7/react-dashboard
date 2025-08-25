import { Link } from "react-router-dom";

function DataTable({
  columns,
  data,
  actions,
  basePath,
  page,
  totalPages,
  fetchPage,
  showPagination = false,
}) {
  return (
    <>
      <table className="table table-hover table-bordered border-dark align-middle shadow">
        <thead className="table-dark">
          <tr>
            {columns.map((col) => (
              <th key={col.accessorKey}>{col.header}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td
                    key={col.accessorKey}
                    className={
                      "read_status" in row && !row.read_status
                        ? "table-info"
                        : ""
                    }
                  >
                    {col.accessorKey === "is_active"
                      ? row[col.accessorKey]
                        ? "Active"
                        : "Inactive"
                      : row[col.accessorKey]}
                  </td>
                ))}
                {actions && (
                  <td>
                    <div className="btn-group">
                      {actions.map((action, idx) => (
                        <Link
                          to={basePath ? `${basePath}/${row.id}` : `${row.id}`}
                          key={idx}
                          className={`btn btn-sm ${action.className}`}
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="text-center"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showPagination && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <button className="btn btn-sm btn-outline-dark" disabled={page === 1} onClick={() => fetchPage(page - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button className="btn btn-sm btn-outline-dark"
            disabled={page === totalPages}
            onClick={() => fetchPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default DataTable;
