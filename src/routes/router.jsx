import { createBrowserRouter } from 'react-router-dom'
import { Called } from '../pages/Called'
import { CalledProvider } from '../contexts/calledContext'
import { contextCalled } from '../contexts/calledContext'
import { Follow } from '../pages/Follow'
import { ErrorPage } from '../pages/Error'
import { Home } from '../pages/Home'
import { Main } from '../pages/Main'

const NewCalledPage = (
  <CalledProvider action={'newCalled'}>
    <Called />
  </CalledProvider>
)

const FollowCalled = (
  <CalledProvider>
    <Follow />
  </CalledProvider>
)

export const routers = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Home />,
    children: [
      {
        path: '/newCalled',
        element: NewCalledPage
      },
      {
        path: '/follow',
        element: FollowCalled
      },
      {
        path: '/',
        element: <Main />
      }
    ]
  }
])
