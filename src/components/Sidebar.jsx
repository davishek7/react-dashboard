import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav sb-sidenav-dark">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              <div className="sb-nav-link-icon">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              Dashboard
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/blogs" ? "active" : ""
              }`}
              to="/blogs"
            >
              <div className="sb-nav-link-icon">
                <i className="fa-solid fa-book"></i>
              </div>
              Blogs
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/contacts" ? "active" : ""
              }`}
              to="/contacts"
            >
              <div className="sb-nav-link-icon">
                <i className="fa-solid fa-address-card"></i>
              </div>
              Contacts
            </Link>
            <Link
              className={`nav-link collapsed ${
                location.pathname === "/trash/blogs" ||
                location.pathname === "/trash/contacts"
                  ? "active"
                  : ""
              }`}
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fa-solid fa-trash"></i>
              </div>
              Recycle Bin
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link
                  className={`nav-link ${
                    location.pathname === "/trash/blogs" ? "active" : ""
                  }`}
                  to="/trash/blogs"
                >
                  Trashed Blogs
                </Link>
                <Link
                  className={`nav-link ${
                    location.pathname === "/trash/contacts" ? "active" : ""
                  }`}
                  to="/trash/contacts"
                >
                  Trashed Contacts
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          <i className="fa-solid fa-user"></i> {user?.username}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
