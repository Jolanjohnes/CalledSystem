import { useEffect, useState } from 'react'
import { WrapperQuestion, WrapperField } from './../styles.js'
import { Load } from '../../../../components/Load/index.jsx'

import { db } from '../../../../config/firebaseConfig.js'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'

export function Description({ formData, setFormData }) {
  const [loading, setLoading] = useState(true)
  const [especifications, setEspecifications] = useState([])

  async function getEspecification() {
    const especificationRef = collection(db, 'especificacoes')
    const q = query(especificationRef, orderBy('descricao', 'asc'))
    const snaphost = await getDocs(q)
    let listEspecification = []
    snaphost.forEach(espec => {
      listEspecification.push({
        code: espec.id,
        name: espec.data().descricao
      })
    })

    setEspecifications(listEspecification)
    setLoading(false)
  }

  useEffect(() => {
    getEspecification()
  }, [])

  return (
    <WrapperQuestion>
      <legend>Descrição do problema</legend>
      <WrapperField>
        {loading ? <Load modulo={'lista de natureza'} /> : ''}
        <label htmlFor="">Classifique a natureza de seu problema</label>
        <select
          name=""
          id=""
          onChange={e =>
            setFormData(state => {
              return { ...state, especification: e.target.value }
            })
          }
        >
          <option value="default">Selecione</option>
          {especifications.map(especification => {
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
