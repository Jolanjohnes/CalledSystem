import { WrapperQuestion, WrapperField, WrapperContact } from './../styles'
import { useContext } from 'react'
import { contextCalled } from './../../../../contexts/calledContext'

export function Identification() {
  const { formData, setFormData } = useContext(contextCalled)

  return (
    <WrapperQuestion>
      <legend>Identificação do úsuario</legend>
      <WrapperField>
        <label htmlFor="">Informe seu nome:</label>
        <input
          type="text"
          value={formData.nameUser}
          onChange={e =>
            setFormData(state => {
              return { ...state, nameUser: e.target.value }
            })
          }
        />
      </WrapperField>

      <WrapperField>
        <label htmlFor="">Informe seu email</label>
        <input
          type="text"
          value={formData.emailUser}
          onChange={e =>
            setFormData(state => {
              return { ...state, emailUser: e.target.value }
            })
          }
        />
      </WrapperField>
      <WrapperContact>
        <WrapperField>
          <label htmlFor="">Informe seu Cpf</label>
          <input
            type="text"
            value={formData.cpf}
            onChange={e =>
              setFormData(state => {
                return { ...state, cpf: e.target.value }
              })
            }
          />
        </WrapperField>

        <WrapperField>
          <label htmlFor="">Seu telefone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={e =>
              setFormData(state => {
                return { ...state, phone: e.target.value }
              })
            }
          />
        </WrapperField>
      </WrapperContact>
    </WrapperQuestion>
  )
}
