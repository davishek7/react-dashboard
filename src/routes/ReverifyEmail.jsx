import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import AuthMessage from "../components/AuthMessage";

function ReverifyEmail() {
  const data = useActionData();

  return (
    <div className="col-lg-5">
      <div className="card shadow-lg border-0 rounded-lg mt-5">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-2">
            Re-send Verification Link
          </h3>
        </div>
        {data?.status === 200 ? (
          <AuthMessage message={data.message} />
        ) : (
          <>
            <div className="card-body">
              <div className="small mb-3 text-muted">
                Enter your email address and we will send you a verification link.
              </div>
              <Form method="post">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <Link className="small" to="/auth/login">
                    Return to login
                  </Link>
                  <button className="btn btn-primary" type="submit">
                    Send Password Reset Email
                  </button>
                </div>
              </Form>
            </div>
            <div className="card-footer text-center py-3">
              <div className="small">
                <Link to="/auth/register">Need an account? Sign up!</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReverifyEmail;
