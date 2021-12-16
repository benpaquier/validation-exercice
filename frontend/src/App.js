import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import User from './pages/User'
import CreateUser from './pages/CreateUser'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Home />} />
        <Route path="/users/:slug" element={<User />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App