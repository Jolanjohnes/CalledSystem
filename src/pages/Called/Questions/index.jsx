import { WrapperQuestion, WrapperField, WrapperContact } from './styles.js'

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
    <div>
      <div>
        <label htmlFor="">Informe sua unidade:</label>
        <select name="" id="">
          <option value="0">Selecione</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Informe sua setor:</label>
        <select name="" id="">
          <option value="0">Selecione</option>
        </select>
      </div>
    </div>
  )
}

export function Descripition() {
  return (
    <div>
      <div>
        <label htmlFor="">Classifique a natureza de seu problema</label>
        <select name="" id="">
          <option value="0">Selecione</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Informe sua setor:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  )
}
