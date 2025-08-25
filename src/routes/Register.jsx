import { Link, Form, useActionData } from "react-router-dom";
import AuthMessage from "../components/AuthMessage";

function Register() {
  const data = useActionData();

  return (
    <div className="col-lg-5">
      <div className="card shadow-lg border-0 rounded-lg mt-5">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-2">Create Account</h3>
        </div>
        {data?.message ? (
          <AuthMessage message={data.message} />
        ) : (
          <>
            <div className="card-body">
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
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="username"
                    name="username"
                  />
                  <label htmlFor="inputEmail">Username</label>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3 mb-md-0">
                      <input
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Create a password"
                        name="password"
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3 mb-md-0">
                      <input
                        className="form-control"
                        id="inputPasswordConfirm"
                        type="password"
                        placeholder="Confirm password"
                      />
                      <label htmlFor="inputPasswordConfirm">
                        Confirm Password
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-0">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-block" type="submit">
                      Create Account
                    </button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="card-footer text-center py-3">
              <div className="small">
                <Link to="/auth/login">Have an account? Go to login</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
