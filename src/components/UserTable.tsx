import type { IUser } from '../interfaces/User'
import UserTableRow from './UserTableRow'

export default function UserTable({ users }: { users?: IUser[] }) {
  return (
    <table className="min-w-full rounded border border-gray-200 bg-white shadow">
      <thead>
        <tr className="bg-gray-100 text-left text-sm text-gray-700 uppercase">
          <th className="px-6 py-3"></th>
          <th className="px-6 py-3">Nome</th>
          <th className="px-6 py-3">E-mail</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user: IUser) => (
          <UserTableRow key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  )
}
