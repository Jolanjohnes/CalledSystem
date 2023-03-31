import { createBrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Called } from '../pages/Called'
import { CalledProvider } from '../contexts/calledContext'
import { authContext, AuthProvider } from '../contexts/authContext'

// Pages
import { Follow } from '../pages/Follow'
import { ErrorPage } from '../pages/Error'
import { Home } from '../pages/Home'
import { Main } from '../pages/Main'
import { Auth } from '../pages/Auth'
import { Dashboard } from '../pages/Dashboard'
import { useContext } from 'react'

function PrivateRoute({ children }) {
  const { user } = useContext(authContext)
  if (!user) return <Navigate to={'/'} />
  return children
}

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />} />
        <Route
          path="/newCalled"
          element={
            <CalledProvider>
              <Called />
            </CalledProvider>
          }
        />
        <Route
          path="/follow"
          element={
            <CalledProvider>
              <Follow />
            </CalledProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <CalledProvider>
              <Dashboard />
            </CalledProvider>
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
