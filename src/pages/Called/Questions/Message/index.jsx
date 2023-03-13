import { WrapperMessage } from './style'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useContext } from 'react'
import { contextCalled } from '../../../../contexts/calledContext'

export function Message() {
  const { formData } = useContext(contextCalled)
  return (
    <WrapperMessage>
      <AiOutlineCheckCircle size={100} />
      <div>
        <h3>Sr(a). {formData.nameUser} foi aberto com sucesso!</h3>
        <p>
          Você receberá um email com o link para acessar o andamento do seu
          chamado.
        </p>
        <p>Estaremos atendendo o mais breve possível.</p>
      </div>
    </WrapperMessage>
  )
}
