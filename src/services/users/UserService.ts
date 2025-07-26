import { UsersAPI } from './UsersAPI'
import type { IUser } from '../../interfaces/User'
import type { AxiosResponse } from 'axios'
import type { GetUsersResponse } from '../../interfaces/UsersApi'

// interface UserServiceInterface {
//   getUsers():
// }

const parseUsersResponse = (res: GetUsersResponse): IUser[] => {
  return res.users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    avatar: user.image,
    email: user.email,
  }))
}

async function getUsers(limit = 5, skip = 0) {
  const fields = 'firstName,lastName,email,image'
  try {
    const response = await UsersAPI.get('/users', {
      params: { limit, skip, select: fields },
    })

    if (!response.data || !Array.isArray(response.data.users)) {
      throw new Error('Formato inesperado da resposta da API')
    }

    const formatted = parseUsersResponse(response.data)
    return formatted
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    return []
  }
}

export default {
  getUsers,
}
