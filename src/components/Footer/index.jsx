import LogoSrc from './../../assets/logo2.png'
import { WrapperFooter } from './style'
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialYoutube
} from 'react-icons/sl'

import { CgCopyright } from 'react-icons/cg'

export function Footer() {
  return (
    <WrapperFooter>
      <div className="socialMedia">
        <p>Nos siga nas redes socias</p>
        <div>
          <SlSocialInstagram />
          <SlSocialLinkedin />
          <SlSocialGithub />
          <SlSocialYoutube />
        </div>
      </div>
      <span>
        <CgCopyright size={18} />
        Copyright 2023
      </span>

      <img src={LogoSrc} alt="" />
    </WrapperFooter>
  )
}
