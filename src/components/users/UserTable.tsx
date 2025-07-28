import { useLoading } from '../../contexts/LoadingContext'
import type { IUser } from '../../interfaces/User'
import SkeletonUserTableRow from '../skeletons/UserTableSkeleton'
import UserTableRow from './UserTableRow'

export default function UserTable({ users }: { users?: IUser[] }) {
  const { isLoading } = useLoading()
  return (
    <table className="min-w-full rounded border border-gray-200 bg-white shadow">
      <thead>
        <tr className="bg-gray-100 text-left text-sm text-gray-700 uppercase">
          <th className="px-6 py-3">
            {isLoading ? <div className="h-4 w-6 animate-pulse rounded bg-gray-200" /> : ''}
          </th>
          <th className="px-6 py-3">
            {isLoading ? <div className="h-4 w-24 animate-pulse rounded bg-gray-200" /> : 'Nome'}
          </th>
          <th className="px-6 py-3">
            {isLoading ? <div className="h-4 w-32 animate-pulse rounded bg-gray-200" /> : 'E-mail'}
          </th>
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => <SkeletonUserTableRow key={i} />)
          : users?.map((user) => <UserTableRow key={user.id} {...user} />)}
      </tbody>
    </table>
  )
}
