import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar";

const SingleBlog = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState([])

    //API call here

  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blogs/${id}`);
      setBlog(response.data.blog)
    } catch (error) {
      alert(error)
    }
      };
      useEffect(() => {
        fetchSingleBlog();
      }, []);
      // console.log(blog)
  return (
    <>
    <Navbar/>
       <div className="container mt-5">
    <h1 className="text-center mb-4">Read Blog</h1>
    
{blog.map((bloog=>{
  return(
    <div key={blog._id} className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">{bloog.title}</h2>
        <h5 className="card-subtitle mb-2 text-muted">{bloog.subTitle}</h5>
        <p className="card-text">
          {bloog.description}
        </p>
      </div>
    </div>
  )
}))}
 </div>
 <Link to={`/deleteBlog/${id}`} className="btn btn-primary">Delete blog</Link>
    </>
  )
}

export default SingleBlog