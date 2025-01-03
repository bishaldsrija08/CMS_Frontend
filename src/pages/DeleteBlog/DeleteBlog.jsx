import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"

const DeleteBlog = () => {
const {id} = useParams()
const navigate = useNavigate()

    const deleteBlog = async ()=>{
        try {
            const response = await axios.delete(`http://localhost:3000/blogs/${id}`)
            if (response.status==200) {
                navigate("/")
            }
         } catch (error) {
            alert(error)
        }
    }
    deleteBlog();
    

  return (
    <div>
    <Navbar/>
      <div className="container mt-5">
        <div className="alert alert-success text-center" role="alert">
            Blog deleted successfully.
        </div>
        <Link to={"/"} className="btn btn-primary">Move to HomePage.</Link>
    </div>
    </div>
  )
}

export default DeleteBlog
