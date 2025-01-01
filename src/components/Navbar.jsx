import './navbar.css'
const Navbar = () => {
  
  return (
    <div className="navbar">
    <div className="logo">MyLogo</div>
    <div className="menu">
      <a href="/">Home</a>
      <a href="/create">Create</a>
      <a href="/update">Update</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
  
  )
}

export default Navbar
