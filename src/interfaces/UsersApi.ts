export interface GetUsersResponse {
  users: APIUser[]
  total: number
  skip: number
  limit: number
}

export interface APIUser {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
}
