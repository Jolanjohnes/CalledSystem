import { useState } from 'react'
import {
  WrapperQuestion,
  WrapperField,
  WrapperContact,
  WrapperResume
} from './styles.js'

export function Identification() {
  return (
    <WrapperQuestion>
      <legend>Identificação do úsuario</legend>
      <WrapperField>
        <label htmlFor="">Informe seu nome:</label>
        <input type="text" />
      </WrapperField>

      <WrapperField>
        <label htmlFor="">Informe seu email</label>
        <input type="text" />
      </WrapperField>
      <WrapperContact>
        <WrapperField>
          <label htmlFor="">Informe seu Cpf</label>
          <input type="text" />
        </WrapperField>

        <WrapperField>
          <label htmlFor="">Seu telefone</label>
          <input type="text" />
        </WrapperField>
      </WrapperContact>
    </WrapperQuestion>
  )
}

export function Local() {
  return (
    <WrapperQuestion>
      <legend>Identificação do Local</legend>
      <WrapperField>
        <label htmlFor="">Informe sua unidade:</label>
        <select name="" id="">
          <option value="0">Selecione</option>
        </select>
      </WrapperField>

      <WrapperField>
        <label htmlFor="">Informe sua setor:</label>
        <select name="" id="">
          <option value="0">Selecione</option>
        </select>
      </WrapperField>
    </WrapperQuestion>
  )
}

export function Descripition() {
  return (
    <WrapperQuestion>
      <legend>Descrição do problema</legend>
      <WrapperField>
        <label htmlFor="">Classifique a natureza de seu problema</label>
        <select name="" id="">
          <option value="0">Selecione</option>
        </select>
      </WrapperField>

      <WrapperField>
        <label htmlFor="">Informe sua setor:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </WrapperField>
    </WrapperQuestion>
  )
}

export function Resume() {
  return (
    <WrapperQuestion>
      <legend>Resumo</legend>
      <WrapperResume>
        <h4>Nome Usuario</h4>
        <label> 'Jolanjohnes Duarte'</label>

        <h4>Cpf úsuario</h4>
        <label> '999.999.999-99'</label>

        <h4>Email</h4>
        <label> 'johnes@gmail.com'</label>

        <h4>Telefone</h4>
        <label> '(98) 99238-3718'</label>

        <h4>Unidade:</h4>
        <label> 'Maternidade Benedito Leite'</label>

        <h4>Setor:</h4>
        <label> 'Prestação de Contas'</label>

        <h4>Natureza</h4>
        <label> 'Software'</label>

        <h4>Descrição</h4>
        <label>
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
          quae consequatur perspiciatis voluptate architecto obcaecati,
          consequuntur maxime est amet impedit maiores, commodi asperiores
          voluptatem dolorem quis nostrum minima provident laboriosam?'
        </label>
      </WrapperResume>
    </WrapperQuestion>
  )
}
