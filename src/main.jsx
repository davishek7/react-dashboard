import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ForgotPassword from "./routes/ForgotPassword";
import PasswordReset from "./routes/PasswordReset";
import BlogList from "./routes/BlogList";
import BlogDetails from "./routes/BlogDetails";
import ContactList from "./routes/ContactList";
import ContactDetails from "./routes/ContactDetails";
import NewBlog from "./routes/NewBlog";
import ReverifyEmail from "./routes/ReverifyEmail";
import EditBlog from "./routes/EditBlog";
import TrashedBlogs from "./routes/TrashedBlogs";
import TrashedContacts from "./routes/TrashedContacts";
import { homeLoader } from "./loaders/home.loader";
import { contactDetails } from "./loaders/contactDetails.loader";
import { emailVerificationLoader } from "./loaders/emailVerification.loader";
import { blogListLoader } from "./loaders/blogList.loader";
import { contactListLoader } from "./loaders/contactList.loader";
import { blogDetails } from "./loaders/blogDetails.loader";
import { trashedBlogsLoader } from "./loaders/trashedBlogs.loader";
import { trashedContactsLoader } from "./loaders/trashedContacts.loader";
import { loginAction } from "./actions/login.action";
import { registerAction } from "./actions/register.action";
import { forgotPasswordAction } from "./actions/forgotPassword.action";
import { passwordResetAction } from "./actions/passwordReset.action";
import { resendEmailVerificationAction } from "./actions/resendEmailVerification.action";
import { newBlogAction } from "./actions/newBlog.action";
import { editBlogAction } from "./actions/editBlog.action";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/blogs",
        element: <BlogList />,
        loader: blogListLoader,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetails />,
        loader: blogDetails,
      },
      {
        path: "/blogs/new",
        element: <NewBlog />,
        action: newBlogAction,
      },
      {
        path: "/blogs/edit/:slug",
        element: <EditBlog />,
        loader: blogDetails,
        action: editBlogAction,
      },
      {
        path: "/contacts",
        element: <ContactList />,
        loader: contactListLoader,
      },
      {
        path: "/contacts/:id",
        element: <ContactDetails />,
        loader: contactDetails,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/trash/blogs",
        element: <TrashedBlogs />,
        loader: trashedBlogsLoader,
      },
      {
        path: "/trash/contacts",
        element: <TrashedContacts />,
        loader: trashedContactsLoader,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "verify-email",
        loader: emailVerificationLoader,
      },
      {
        path: "resend-verification",
        element: <ReverifyEmail />,
        action: resendEmailVerificationAction,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
      },
      {
        path: "reset-password",
        element: <PasswordReset />,
        action: passwordResetAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </AuthProvider>
  </StrictMode>
);
