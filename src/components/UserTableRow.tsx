import type { IUser } from '../interfaces/User'

export default function UserTableRow({ avatar, name, email, id }: Pick<IUser, 'avatar' | 'name' | 'email' | 'id'>) {
  return (
    <tr key={id} className="border-t border-gray-200 transition odd:bg-white even:bg-gray-50 hover:bg-gray-100">
      <td className="px-6 py-4">
        <img src={avatar} alt={`${name}'s avatar`} className="h-12 w-12 min-w-12 rounded-full object-cover" />
      </td>
      <td className="px-6 py-4 font-medium">{name}</td>
      <td className="px-6 py-4 text-gray-600">{email}</td>
    </tr>
  )
}
