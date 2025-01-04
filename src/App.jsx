import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blogs/Blog";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import DeleteBlog from "./pages/DeleteBlog/DeleteBlog";
import UpdateBlog from "./pages/UpdateBlog/updateBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/singleBlog/:id" element={<SingleBlog />} />
          <Route path="/deleteBlog/:id" element={<DeleteBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
