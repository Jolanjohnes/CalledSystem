import { useContext, useState, useEffect } from 'react'
import { WrapperQuestion, WrapperField } from './../styles.js'

import { contextCalled } from '../../../../contexts/calledContext.jsx'
import { Load } from '../../../../components/Load/index.jsx'

export function Description() {
  const { formData, setFormData, getSpecification, loading } =
    useContext(contextCalled)
  const [listSpecification, setListSpecification] = useState([])

  async function loadSpecification() {
    const listSpec = await getSpecification()
    setListSpecification(listSpec)
  }

  useEffect(() => {
    loadSpecification()
  }, [])

  return (
    <WrapperQuestion>
      <legend>Descrição do problema</legend>
      <WrapperField>
        <div>
          {loading ? <Load /> : ''}
          <label htmlFor="">Classifique a natureza de seu problema</label>
        </div>
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
