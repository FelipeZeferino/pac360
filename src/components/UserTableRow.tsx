import type { IUser } from '../types/User'

export default function UserTableRow({ avatar, name, email, id }: Pick<IUser, 'avatar' | 'name' | 'email' | 'id'>) {
  return (
    <tr key={id} className="border-t border-gray-200 hover:bg-gray-100 transition odd:bg-white even:bg-gray-50">
      <td className="px-6 py-4">
        <img src={avatar} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full object-cover min-w-12" />
      </td>
      <td className="px-6 py-4 font-medium">{name}</td>
      <td className="px-6 py-4 text-gray-600">{email}</td>
    </tr>
  )
}
