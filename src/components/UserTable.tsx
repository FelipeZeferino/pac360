import type { IUser } from '../interfaces/User'
import SkeletonUserTableRow from './skeletons/UserTableSkeleton'
import UserTableRow from './UserTableRow'

export default function UserTable({ users, loading }: { users?: IUser[]; loading?: boolean }) {
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
        {loading
          ? Array.from({ length: 10 }).map((_, i) => <SkeletonUserTableRow key={i} />)
          : users?.map((user) => <UserTableRow key={user.id} {...user} />)}
      </tbody>
    </table>
  )
}
