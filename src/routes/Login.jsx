import { useEffect } from "react";
import { Link, Form, useActionData, useNavigation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";


function Login() {

  const actionData = useActionData()
  const { saveAuth } = useAuth()
  const navigation = useNavigation();
  const navigate = useNavigate()

  useEffect(()=>{
    if(actionData?.status === 200){
      saveAuth(actionData.data.user, actionData.data.auth_tokens.access_token, actionData.data.auth_tokens.refresh_token)
      navigate("/")
    }
    else if(actionData?.status === 403){
      toast.warning(actionData.message)
      navigate("/auth/resend-verification")
    }
  }, [actionData, saveAuth, navigate])


  return (
    <div className="col-lg-5">
      <div className="card shadow-lg border-0 rounded-lg mt-5">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-2">Admin Login</h3>
        </div>
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
                id="inputPassword"
                type="password"
                placeholder="Password"
                name="password"
              />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                id="inputRememberPassword"
                type="checkbox"
                value=""
              />
              <label
                className="form-check-label"
                htmlFor="inputRememberPassword"
              >
                Remember Password
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
              <Link className="small" to="/auth/forgot-password">
                Forgot Password?
              </Link>
              <button type="submit" className="btn btn-primary" disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? "Logging in..." : "Login"}
              </button>
            </div>
          </Form>
        </div>
        <div className="card-footer text-center py-3">
          <div className="small">
            <Link to="/auth/register">Need an account? Sign up!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
