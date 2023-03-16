import { WrapperQuestion, WrapperResume } from './../styles'
import { useContext } from 'react'
import { contextCalled } from '../../../../contexts/calledContext'
import { Load } from '../../../../components/Load'

export function Resume() {
  const { formData, loading } = useContext(contextCalled)
  return (
    <WrapperQuestion>
      <legend>Resumo</legend>
      {loading ? (
        <h4>
          Registrando seu Chamado <Load />
        </h4>
      ) : (
        ''
      )}
      <WrapperResume>
        <h4>Nome úsuario:</h4>
        <label>{formData.nameUser}</label>

        <h4>Cpf úsuario:</h4>
        <label>{formData.cpf}</label>

        <h4>Email:</h4>
        <label>{formData.emailUser}</label>

        <h4>Telefone:</h4>
        <label>{formData.phone}</label>

        <h4>Unidade:</h4>
        <label>{formData.unit}</label>

        <h4>Setor:</h4>
        <label>{formData.sector}</label>

        <h4>Natureza:</h4>
        <label>{formData.specification}</label>

        <h4>Descrição:</h4>
        <label>{formData.description}</label>
      </WrapperResume>
    </WrapperQuestion>
  )
}
