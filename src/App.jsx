import { BrowserRouter, Routes, Route } from  'react-router-dom'
import Blog from './pages/Blogs/Blog'
import CreateBlog from './pages/CreateBlog/CreateBlog'
function App() {

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Blog/>}/>
    <Route path='/create' element={<CreateBlog/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App