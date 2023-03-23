import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { WrapperMain } from '../../global'
export function Home() {
  return (
    <WrapperMain>
      <Header />
      <Outlet />
      <Footer />
    </WrapperMain>
  )
}
