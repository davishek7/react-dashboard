import { Link, Form, useActionData } from "react-router-dom";
import AuthMessage from "../components/AuthMessage";

function PasswordReset() {
  const data = useActionData();

  return (
    <div className="col-lg-5">
      <div className="card shadow-lg border-0 rounded-lg mt-5">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-2">Reset Password</h3>
        </div>
        {data?.message ? (
          <AuthMessage message={data.message} />
        ) : (
          <div className="card-body">
            <div className="small mb-3 text-muted">
              Enter your new password to reset it.
            </div>
            <Form method="post">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputEmail"
                  type="password"
                  placeholder="New password"
                  name="new_password"
                />
                <label htmlFor="newPassword">New password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                <Link className="small" to="/auth/login">
                  Return to login
                </Link>
                <button className="btn btn-primary" type="submit">
                  Reset Password
                </button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordReset;
