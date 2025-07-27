import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserService from '../../services/users/UserService'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import type { UserDetails } from '../../interfaces/User'
import Skeleton from 'react-loading-skeleton'
import { useLoading } from '../../contexts/LoadingContext'

export default function UserDetailPage() {
  const { id } = useParams()
  const { isLoading, setLoading } = useLoading()
  const [user, setUser] = useState<UserDetails | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const response = await UserService.getUserById(Number(id))

        setUser(response)
      } catch (err) {
        console.error(err)
        toast.error('Erro ao carregar usuário')
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchUser()
  }, [id, setLoading])

  return (
    <div className="flex min-h-[400px] items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="absolute top-4 left-4">
          <Button
            variant="outline"
            className="cursor-pointer focus:shadow-none focus:ring-0 focus:outline-none"
            onClick={() => navigate('/')}
          >
            ← Voltar
          </Button>
        </div>

        <h2 className="mt-2 mb-6 text-center text-2xl font-bold text-gray-800">
          {isLoading ? <Skeleton width={160} /> : `Usuário #${user?.id}`}
        </h2>

        <div className="flex flex-col items-center gap-6">
          {isLoading ? (
            <Skeleton circle height={96} width={96} />
          ) : (
            <img
              src={user?.image}
              alt={`Foto de ${user?.firstName}`}
              className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover"
            />
          )}

          <div className="w-full space-y-2 text-sm text-gray-700">
            <p>
              <strong>Nome:</strong> {isLoading ? <Skeleton width={180} /> : `${user?.firstName} ${user?.lastName}`}
            </p>
            <p>
              <strong>Email:</strong> {isLoading ? <Skeleton width={220} /> : user?.email}
            </p>
            <p>
              <strong>Gênero:</strong> {isLoading ? <Skeleton width={100} /> : UserService.mapGender(user?.gender)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
