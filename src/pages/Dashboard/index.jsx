import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'

export function Dashboard() {
  const { user } = useContext(authContext)

  return (
    <div>
      <h1>DASHBOARD</h1>
      <p>{user?.email}</p>
    </div>
  )
}
