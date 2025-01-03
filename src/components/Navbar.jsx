import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo"><Link to={"/"}>MyLogo</Link></div>
      <div className="menu">
        <a href="/">Home</a>
        <a onClick={() => navigate("/create")}>Create</a>
        <a href="/update">Update</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
