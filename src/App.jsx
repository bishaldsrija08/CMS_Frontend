import { BrowserRouter, Routes, Route } from  'react-router-dom'
import Blog from './pages/Blogs/Blog'
function App() {

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Blog/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App