import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './pages/users/UserInfo'
import NotFound from './pages/NotFound'
import UsersPage from './pages/users/UsersPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
