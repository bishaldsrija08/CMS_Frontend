import axios from 'axios';
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react';
const Blog = () => {
  
  
  const [blogs, setBlogs] = useState([])

  //API call here

  const fetchBlogs = async () => {
try {
  const response = await axios.get("http://localhost:3000/blogs");
  setBlogs(response.data.blogs)
} catch (error) {
  alert(error)
}
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
// console.log(blogs)
  return (
<>
  <Navbar/>

    {
      blogs.map((blog)=>{
        return(
  <div key={blog._id} className="card" style={{ width: "18rem", marginBottom: "1rem", marginTop: "1rem" }}>
          <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
        <h6 className="card-title"><b>{blog.subTitle}</b></h6>
        <p className="card-text">
          {blog.description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        </div>

  </div>
        )
      })}
</>
  )
}
    
export default Blog