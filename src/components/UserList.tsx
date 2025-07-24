// src/components/UserList.tsx
import { useState } from 'react'
import { mockUsers } from '../data/mockUsers'
import UserTable from './UserTable'
import type { IUser } from '../types/User'

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users] = useState<IUser[]>(mockUsers)

  const filteredUsers = users.filter((user: IUser) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className="container mx-auto p-4 overflow-x-auto max-w-[1248px]">
      <input
        type="text"
        placeholder="Buscar usuários..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <UserTable users={filteredUsers ?? mockUsers} />
    </div>
  )
}
