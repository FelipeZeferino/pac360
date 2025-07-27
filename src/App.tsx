import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './pages/users/UserInfo'
import NotFound from './pages/NotFound'
import UsersPage from './pages/users/UsersPage'
import { ToastContainer } from 'react-toastify'
import { LoadingProvider } from './contexts/LoadingContext'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <LoadingProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </div>
  )
}

export default App
