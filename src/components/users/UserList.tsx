// src/components/UserList.tsx
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
  const { setLoading } = useLoading()
  const filteredUsers = users.filter((user: IUser) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getUsers()
        const { skip, limit, total } = response
        const currentPage = Math.ceil(skip / limit) + 1
        console.log(`Current Page: ${currentPage}, Total Users: ${total}`)
        console.log(limit)

        // setCurrentPage()
        const users = userService.parseUsersResponse(response)
        setUsers(users)
      } catch {
        toast.error('Erro ao buscar usuários. Tente novamente mais tarde.')
        setUsers([])
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    fetchUsers()
  }, [])

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
      {/* <Pagination currentPage={1} totalPages={Math.ceil(filteredUsers.length / 10)} onPageChange={(page) => { */}
      {/* Implement page change logic here */}
      {/* // console.log(`Page changed to: ${page}`) */}
      {/* // }} /> */}
    </div>
  )
}
