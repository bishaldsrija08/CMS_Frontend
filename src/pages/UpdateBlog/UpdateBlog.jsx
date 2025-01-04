import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const UpdateBlog = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  //Handle Change
  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name)

    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  // console.log(blog);
  //API call here

  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blogs/${id}`);
      setBlog(response.data.blog[0]);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchSingleBlog();
  }, []);

  // console.log(blog);

  const keyToExclude = ["createdAt", "updatedAt"];
  keyToExclude.forEach((key) => {
    delete blog[key];
  });

  //update code goes her

  const updateBlog = async (e) => {
    e.preventDefault(); // reload hudaina
    const response = await axios.patch(
      "http://localhost:3000/blogs/" + id,
      blog
    );
    if (response.status == 200) {
      alert(response.data.message);
      Navigate("/singleBlog/" + id);
    } else {
      alert("Something went wrong! Please try again later!");
    }
  };

  return (
    <>
      <Navbar />

      <div key={blog.id} className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h1 className="card-title text-center">Form Title</h1>
            <h5 className="card-subtitle mb-3 text-center text-muted">
              Form Subtitle
            </h5>
            <p className="card-text text-center">
              This is a short description of the form. Please update the
              required fields below to proceed.
            </p>
            <form onSubmit={updateBlog}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="title"
                  placeholder="Enter your title."
                  required
                  value={blog.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Sub Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="subTitle"
                  placeholder="Enter your sub title."
                  required
                  value={blog.subTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="description"
                  rows="4"
                  placeholder="Enter your 
                        description."
                  value={blog.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBlog;
