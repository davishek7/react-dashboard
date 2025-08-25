import { Outlet, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";
import { useAuth } from "../context/AuthContext";

function AuthLayout() {
  const { accessToken } = useAuth();

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              {accessToken ? <Navigate to="/" replace /> : <Outlet />}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
