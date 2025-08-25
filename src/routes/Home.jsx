import { useLoaderData } from "react-router-dom";
import DataTable from "../components/DataTable";
import { Link } from "react-router-dom";
import { BLOG_COLUMNS, BLOG_ACTIONS } from "../constants/blog.constants"
import { CONTACT_COLUMNS, CONTACT_ACTIONS } from "../constants/contact.constants"


function Home() {
  const { blogs, contacts } = useLoaderData();

  return (
    <>
      <div className="mt-3">
        <div className="clearfix">
          <h2 className="text-xl font-bold mb-3 float-start">Recent Blog Posts</h2>
          <Link to="/blogs/new" className="btn btn-outline-info float-end">
            <i className="fa-solid fa-plus"></i> Add New Blog
          </Link>
        </div>

        <DataTable
          columns={BLOG_COLUMNS}
          data={blogs}
          actions={BLOG_ACTIONS}
          basePath="blogs"
        />
        <div className="clearfix">
          <Link to="/blogs" className="btn btn-outline-dark float-end">
            View all blogs <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Recent Contact Requests</h2>
        <DataTable
          columns={CONTACT_COLUMNS}
          data={contacts}
          actions={CONTACT_ACTIONS}
          basePath="contacts"
        />
        <div className="clearfix my-3">
          <Link to="/contacts" className="btn btn-outline-dark float-end">
            View all contacts <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
