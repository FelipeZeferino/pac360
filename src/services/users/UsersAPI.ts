import axios from 'axios'

export const UsersAPI = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 1000,
})
