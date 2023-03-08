import { WrapperLoad } from './styles'
import { ImSpinner3 } from 'react-icons/im'

export function Load({ modulo }) {
  return (
    <WrapperLoad>
      <ImSpinner3 size={25} /> <span>Carregando {modulo}</span>
    </WrapperLoad>
  )
}
