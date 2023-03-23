import { WrapperHeader, ImageLogo, Menu } from './style.js'

import { AiFillHome } from 'react-icons/ai'

import LogoSrc from './../../assets/logo2.png'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <WrapperHeader>
      <ImageLogo src={LogoSrc} />

      <Menu>
        <li>
          <AiFillHome size={18} />
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/newCalled'}>Novo Chamado</Link>
        </li>
        <li>
          <Link to={'/follow'}>Acompanhar Chamado</Link>
        </li>
        <li>
          <Link to={'/login'}>Acesso a área restrita.</Link>
        </li>
      </Menu>

      <h3>CHAMADOS</h3>
    </WrapperHeader>
  )
}
