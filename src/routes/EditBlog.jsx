import { useState } from "react";
import {
  useNavigate,
  useNavigation,
  useLoaderData,
  useActionData,
  Form,
} from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { toast } from "react-toastify";
import { useEffect } from "react";

function EditBlog() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const actionData = useActionData();

  const [title, setTitle] = useState(loaderData.title);
  const [subtitle, setSubtitle] = useState(loaderData.subtitle);
  const [content, setContent] = useState(loaderData.content);

  const isFormEmpty = !title.trim() || !subtitle.trim() || !content.trim();

  useEffect(() => {
    if (actionData?.status === 200) {
        toast.success(actionData.message);
        navigate(`/blogs/${loaderData.slug}`);
    }
  }, [actionData, navigate, loaderData.slug])

  return (
    <div className="mt-3">
      <div className="clearfix">
        <h2 className="text-xl font-bold mb-3 float-start">
          Edit Blog: {loaderData.title}
        </h2>
      </div>
      <Form method="post">
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="title"
            name="title"
            type="text"
            value={title}
            placeholder="Enter your title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="subtitle"
            name="subtitle"
            type="text"
            value={subtitle}
            placeholder="Enter your subtitle..."
            required
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <label htmlFor="subtitle">Subtitle</label>
        </div>
        <div>
          <MDEditor
            value={content}
            onChange={setContent}
            height={400}
          />
          <input type="hidden" name="content" value={content} />
        </div>
        <br />
        <button
          className="btn btn-primary text-uppercase"
          id="submitButton"
          type="submit"
          disabled={isFormEmpty || navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Saving..." : "Save"}
        </button>
      </Form>
    </div>
  );
}

export default EditBlog;
