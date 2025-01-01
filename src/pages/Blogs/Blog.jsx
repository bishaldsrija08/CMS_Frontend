import axios from 'axios';
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react';
const Blog = () => {
  const [blogs, setBlogs] = useState([])

  //API call here

  const fetchBlogs = async () => {
    const blogData = await axios.get("http://localhost:3000/blogs");
    setBlogs(blogData.data.blogs)
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
// console.log(blogs)
  return (
<>
  <Navbar/>
  <div className="card" style={{ width: "18rem" }}>

    {
      blogs.map((blog)=>{
        return(
          <div key={blog._id} className="card-body">
          <h5 className="card-title">{blog.title}</h5>
        <h6 className="card-title">{blog.subTitle}</h6>
        <p className="card-text">
          {blog.description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        </div>

        )
      })}
  </div>
</>
  )
}
    
export default Blog