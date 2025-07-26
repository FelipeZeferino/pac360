// src/data/mockUsers.ts
import { type IUser } from '../interfaces/User'

export const mockUsers: IUser[] = [
  {
    id: 1,
    name: 'Tom Wilson',
    email: 'user1@company.com',
    department: 'Support',
    role: 'Junior',
    avatar: 'https://i.pravatar.cc/150?img=1',
    isActive: true,
    lastActive: '2025-07-22T22:31:21.723Z',
    projects: 2,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    email: 'user2@company.com',
    department: 'Product',
    role: 'Intern',
    avatar: 'https://i.pravatar.cc/150?img=37',
    isActive: true,
    lastActive: '2025-07-23T06:22:20.444Z',
    projects: 1,
  },
  {
    id: 3,
    name: 'Sarah Chen',
    email: 'user3@company.com',
    department: 'Sales',
    role: 'Junior',
    avatar: 'https://i.pravatar.cc/150?img=18',
    isActive: true,
    lastActive: '2025-07-22T18:45:03.280Z',
    projects: 2,
  },
  {
    id: 4,
    name: 'Mike Rodriguez',
    email: 'user4@company.com',
    department: 'Marketing',
    role: 'Manager',
    avatar: 'https://i.pravatar.cc/150?img=66',
    isActive: true,
    lastActive: '2025-07-20T01:06:18.458Z',
    projects: 5,
  },
]
