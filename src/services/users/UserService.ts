import { UsersAPI } from './UsersAPI'
import type { IUser } from '../../interfaces/User'
import type { GetUsersResponse } from '../../interfaces/UsersApi'

function parseUsersResponse(res: GetUsersResponse): IUser[] {
  return res.users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    avatar: user.image,
    email: user.email,
  }))
}

async function getUsers(limit = 8, skip = 0) {
  const fields = 'firstName,lastName,email,image'
  const response = await UsersAPI.get('/users', {
    params: { limit, skip, select: fields },
  })
  console.log(response)

  if (!response.data || !Array.isArray(response.data.users)) {
    throw new Error('Formato inesperado da resposta da API')
  }

  return {
    users: response.data.users,
    limit: response.data.limit,
    total: response.data.total,
    skip: response.data.skip,
  }
}
async function getUserById(id: number) {
  const fields = 'firstName,lastName,email,image,gender,birthdate'
  const response = await UsersAPI.get(`/users/${id}`, {
    params: { select: fields },
  })
  if (!response.data) {
    throw new Error('Formato inesperado da resposta da API')
  }
  return response.data
}

function mapGender(userGender: string | undefined) {
  const genderMap: Record<string, string> = {
    female: 'feminino',
    male: 'masculino',
  }
  if (!userGender) return 'Não Informado'

  return genderMap[userGender] ?? userGender
}

export default {
  getUsers,
  getUserById,
  parseUsersResponse,
  mapGender,
}
