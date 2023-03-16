import { WrapperQuestion, WrapperField } from './../styles'
import { useEffect, useState } from 'react'

import { useContext } from 'react'
import { contextCalled } from '../../../../contexts/calledContext'
import { Load } from '../../../../components/Load'

export function Local() {
  const { setFormData, getUnits, loading } = useContext(contextCalled)

  const [unitSected, setUnitSelect] = useState('default')
  const [sectoresUnitSelected, setSectoresUnitSelected] = useState([])
  const [listUnits, setListUnits] = useState([])

  function selectedUnit(e) {
    setUnitSelect(e)

    if (e != 'default') {
      const index = listUnits.findIndex(item => item.code == e)
      setFormData(state => {
        return { ...state, unit: listUnits[index].name }
      })
      setSectoresUnitSelected(listUnits[index].sectores)
    } else {
      setSectoresUnitSelected([])
    }
  }

  async function loadUnits() {
    const listUnits = await getUnits()
    setListUnits(listUnits)
  }

  useEffect(() => {
    loadUnits()
  }, [])

  return (
    <WrapperQuestion>
      <legend>Identificação do Local</legend>
      <WrapperField>
        <div>
          <label htmlFor="">Informe sua unidade: </label>
          {loading ? <Load /> : ''}
        </div>
        <select
          name=""
          id=""
          value={unitSected}
          onChange={e => selectedUnit(e.target.value)}
          disabled={loading}
        >
          <option value="default">Selecione</option>
          {listUnits.map(unit => {
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
          disabled={loading}
        >
          <option value="default">Selecione</option>

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
