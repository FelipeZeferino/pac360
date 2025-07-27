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

async function getUsers(limit = 10, skip = 0) {
  const fields = 'firstName,lastName,email,image'
  const response = await UsersAPI.get('/users', {
    params: { limit, skip, select: fields },
  })

  if (!response.data || !Array.isArray(response.data.users)) {
    throw new Error('Formato inesperado da resposta da API')
  }

  return { data: response.data }
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
