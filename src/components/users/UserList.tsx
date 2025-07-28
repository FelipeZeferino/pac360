import { useEffect, useState } from 'react'
import UserTable from './UserTable'
import type { IUser } from '../../interfaces/User'
import userService from '../../services/users/UserService'
import { toast } from 'react-toastify'
import { useLoading } from '../../contexts/LoadingContext'
import { Pagination } from '../Pagination'

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<IUser[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalUsers, setTotalUsers] = useState(0)
  const { setLoading } = useLoading()
  const filteredUsers = users.filter((user: IUser) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const USERS_PER_PAGE = 10

  const fetchUsers = async (page: number) => {
    try {
      setLoading(true)
      let skip = (page - 1) * USERS_PER_PAGE
      let limit = 10
      if (skip >= totalUsers) {
        limit = skip - totalUsers + USERS_PER_PAGE
        skip = totalUsers
      }
      const response = await userService.getUsers(limit, skip)
      const { total } = response
      setTotalUsers(total)
      const users = userService.parseUsersResponse(response)
      setUsers(users)
    } catch {
      toast.error('Erro ao buscar usuários. Tente novamente mais tarde.')
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(currentPage)
  }, [currentPage])

  return (
    <div className="container mx-auto max-w-[1248px] overflow-x-auto p-4">
      <input
        type="text"
        placeholder="Buscar usuários..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 w-full max-w-sm rounded-[25px] border border-gray-300 px-4 py-2 transition focus:ring-1 focus:outline-none"
      />
      <UserTable users={filteredUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalUsers / USERS_PER_PAGE)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
