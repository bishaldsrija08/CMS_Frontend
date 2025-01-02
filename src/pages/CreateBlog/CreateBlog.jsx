import { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const Navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title);
  console.log(subTitle);
  console.log(description);

  const createBlog = async (e) => {
    e.preventDefault();
    const blog = {
      title: title,
      subTitle: subTitle,
      description: description,
    };

    //send above states data to api.
    const response = await axios.post("http://localhost:3000/create/", blog);
    // console.log(response.data)

    if(response.status==201){
        alert(response.data.message)
        Navigate("/")
    }else{
        alert("Something went wrong! Please try again later!")
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h1 className="card-title text-center">Form Title</h1>
            <h5 className="card-subtitle mb-3 text-center text-muted">
              Form Subtitle
            </h5>
            <p className="card-text text-center">
              This is a short description of the form. Please fill out all the
              required fields below to proceed.
            </p>
            <form onSubmit={createBlog}>
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
                  onChange={(e) => setTitle(e.target.value)}
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
                  onChange={(e) => setSubTitle(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
