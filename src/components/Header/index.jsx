import { WrapperHeader, Title, ImageLogo } from './style.js'
import LogoSrc from './../../assets/logo2.png'
export function Header() {
  return (
    <header>
      <WrapperHeader>
        <ImageLogo src={LogoSrc} />
        <Title>CHAMADOS</Title>
      </WrapperHeader>
    </header>
  )
}
