import type { IUser } from '../../interfaces/User'
import { useNavigate } from 'react-router-dom'

export default function UserTableRow({ avatar, name, email, id }: Pick<IUser, 'avatar' | 'name' | 'email' | 'id'>) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/user/${id}`)
  }

  return (
    <tr
      key={id}
      onClick={handleClick}
      className="cursor-pointer border-t border-gray-200 transition odd:bg-white even:bg-gray-50 hover:bg-gray-100"
    >
      <td className="px-6 py-4">
        <img src={avatar} alt={`${name}'s avatar`} className="h-12 w-12 min-w-12 rounded-full object-cover" />
      </td>
      <td className="px-6 py-4 font-medium">{name}</td>
      <td className="px-6 py-4 text-gray-600">{email}</td>
    </tr>
  )
}
