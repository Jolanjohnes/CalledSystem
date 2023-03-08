import { WrapperQuestion, WrapperField } from './../styles'
import { useState, useEffect } from 'react'
import { Load } from '../../../../components/Load'
import { db } from '../../../../config/firebaseConfig'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'

export function Local({ setFormData }) {
  const [unitSected, setUnitSelect] = useState('defaulf')
  const [sectoresUnitSelected, setSectoresUnitSelected] = useState([])
  const [units, setUnits] = useState([])

  const [loading, setLoading] = useState(true)

  async function getUnits() {
    const unitsRef = collection(db, 'unidades')
    const q = query(unitsRef, orderBy('nome', 'asc'))
    const snaphost = await getDocs(q)
    let listUnits = []
    snaphost.forEach(unit => {
      listUnits.push({
        code: unit.id,
        name: unit.data().nome,
        sectores: unit.data().setores
      })
    })

    setUnits(listUnits)
    setLoading(false)
  }

  function selectedUnit(e) {
    setUnitSelect(e)

    if (e != 'default') {
      const index = units.findIndex(item => item.code == e)
      setFormData(state => {
        return { ...state, unit: units[index].name }
      })
      setSectoresUnitSelected(units[index].sectores)
    } else {
      setSectoresUnitSelected([])
    }
  }

  useEffect(() => {
    getUnits()
  }, [])

  return (
    <WrapperQuestion>
      <legend>Identificação do Local</legend>
      <WrapperField>
        {loading ? <Load modulo={'Unidades'} /> : ''}
        <label htmlFor="">Informe sua unidade: </label>
        <select
          name=""
          id=""
          value={unitSected}
          onChange={e => selectedUnit(e.target.value)}
        >
          <option value="default">Selecione</option>
          {units.map(unit => {
            return (
              <option value={unit.code} key={unit.code}>
                {unit.name}
              </option>
            )
          })}
        </select>
      </WrapperField>

      <WrapperField>
        <label htmlFor="">Informe sua setor:</label>
        <select
          name=""
          id=""
          onChange={e => {
            setFormData(state => {
              return { ...state, sector: e.target.value }
            })
          }}
        >
          <option value="defaulf">Selecione</option>

          {sectoresUnitSelected.map((sector, index) => {
            return (
              <option key={index} value={sector}>
                {sector}
              </option>
            )
          })}
        </select>
      </WrapperField>
    </WrapperQuestion>
  )
}
