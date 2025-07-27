// src/types/User.ts
export interface IUser {
  id: number
  name: string
  email: string
  avatar: string
}

export interface UserDetails {
  id: IUser['id']
  firstName: IUser['name']
  lastName: IUser['name']
  email: string
  image: IUser['avatar']
  gender: string
}