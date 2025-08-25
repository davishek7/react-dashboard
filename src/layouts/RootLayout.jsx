import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RootLayout() {
  const { accessToken } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return localStorage.getItem("sb|sidebar-toggle") === "true";
  });

  useEffect(() => {
    localStorage.setItem("sb|sidebar-toggle", isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div className={isSidebarOpen ? "sb-sidenav-toggled" : ""}>
      <Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              {accessToken ? <Outlet /> : <Navigate to="/auth/login" replace />}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
