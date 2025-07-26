// src/components/UserList.tsx
import { useEffect, useState } from 'react'
import { mockUsers } from '../data/mockUsers'
import UserTable from './UserTable'
import type { IUser } from '../interfaces/User'
import userService from '../services/users/UserService'

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<IUser[]>(mockUsers)
  const [loading, setLoading] = useState(true)
  const filteredUsers = users.filter((user: IUser) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    setLoading(true)
    userService
      .getUsers()
      .then((users) => {
        console.log(users)
        setUsers(users)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários:', error)
        //toast.error('Erro ao buscar usuários')
        setUsers([])
        setLoading(false)
      })
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

      <UserTable users={filteredUsers} loading={loading} />
    </div>
  )
}
