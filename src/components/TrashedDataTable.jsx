import { Link } from "react-router-dom";

function TrashedDataTable({
  columns,
  data,
  actions,
  onRestore,
  onDelete,
  page,
  totalPages,
  fetchPage,
  showPagination = false,
}) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover border-dark align-middle shadow">
        <thead className="table-dark">
          <tr>
            {columns.map((col) => (
              <th key={col.accessorKey}>{col.header}</th>
            ))}
            {actions.map((action) => (
              <th key={action.label}>{action.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.accessorKey}>{row[col.accessorKey]}</td>
                ))}
                {actions.map((action) => (
                  <td key={action.label}>
                    {action.label === "Restore" ? (
                      <i className={action.icon} onClick={() => onRestore(row.slug ? row.slug : row.id)}></i>
                    ) : (
                      <i className={action.icon} onClick={() => onDelete(row.slug ? row.slug : row.id)}></i>
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (actions ? 2 : 0)}
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
          className="mb"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem",
            gap: "1rem",
          }}
        >
          <button
            className="btn btn-sm btn-outline-dark"
            disabled={page === 1}
            onClick={() => fetchPage(page - 1)}
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-sm btn-outline-dark"
            disabled={page === totalPages}
            onClick={() => fetchPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TrashedDataTable;
