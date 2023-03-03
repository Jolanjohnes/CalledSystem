import { WrapperHeader, Title, ImageLogo } from './style.js'
import LogoSrc from './../../assets/logo2.png'
export function Header() {
  return (
    <WrapperHeader>
      <ImageLogo src={LogoSrc} />
      <Title>CHAMADOS</Title>
    </WrapperHeader>
  )
}
