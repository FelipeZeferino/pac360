// src/components/UserList.tsx
import { mockUsers } from '../data/mockUsers'
import UserTable from './UserTable'

export default function UserList() {
  return (
    <div className="container mx-auto p-4 overflow-x-auto max-w-[1248px]">
      <UserTable users={mockUsers} />
    </div>
  )
}
