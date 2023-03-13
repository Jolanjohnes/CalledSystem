import { useContext } from 'react'
import { WrapperQuestion, WrapperField } from './../styles.js'

import { contextCalled } from '../../../../contexts/calledContext.jsx'

export function Description() {
  const { formData, setFormData, listSpecification } = useContext(contextCalled)

  return (
    <WrapperQuestion>
      <legend>Descrição do problema</legend>
      <WrapperField>
        <label htmlFor="">Classifique a natureza de seu problema</label>
        <select
          name=""
          id=""
          onChange={e =>
            setFormData(state => {
              return { ...state, specification: e.target.value }
            })
          }
        >
          <option value="default">Selecione</option>
          {listSpecification.map(especification => {
            return (
              <option key={especification.code}>{especification.name}</option>
            )
          })}
        </select>
      </WrapperField>

      <WrapperField>
        <label htmlFor="">Descreva seu problema:</label>
        <textarea
          cols="30"
          rows="10"
          value={formData.description}
          onChange={e =>
            setFormData(state => {
              return { ...state, description: e.target.value }
            })
          }
        ></textarea>
      </WrapperField>
    </WrapperQuestion>
  )
}
