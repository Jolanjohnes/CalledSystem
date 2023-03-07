import { useState } from 'react'
import {
  WrapperQuestion,
  WrapperField,
  WrapperContact,
  WrapperResume
} from './styles.js'

export function Identification({ formData, setFormData }) {
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

export function Local({ setFormData }) {
  const [unitSected, setUnitSelect] = useState('defaulf')
  const [sectoresUnitSelected, setSectoresUnitSelected] = useState([])

  const units = [
    {
      code: '0txZyUzk80YBrnQIanDS',
      name: 'unidade 1',
      sectores: ['setor1unidade1', 'setor2unidade1']
    },
    {
      code: 'A0STZnJWBhcbGfFHXGcr',
      name: 'unidade 2',
      sectores: ['setor1undiade2', 'setor2undiade2']
    },
    {
      code: 'AwGtkfrRL26x0YU3Nwsq',
      name: 'unidade 3',
      sectores: ['setor1unidade3', 'setor2unidade3']
    },
    {
      code: 'OQV1hqWAxP7AmzXyEU8h',
      name: 'unidade 4',
      sectores: ['setor1unidade4', 'setor2unidade4']
    },
    {
      code: 'jMSM3aucqO8Ypnzf9VuR',
      name: 'unidade 5',
      sectores: ['setor1unidade5', 'setor2unidade5']
    }
  ]

  function selectedUnit(e) {
    console.log(e)
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

  return (
    <WrapperQuestion>
      <legend>Identificação do Local</legend>
      <WrapperField>
        <label htmlFor="">Informe sua unidade:</label>
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

export function Description({ formData, setFormData }) {
  const especifications = [
    { code: 'JpFdl91w2lhfEvU73Gj8', name: 'Internet' },
    { code: 'XkQ8pkXQDpmlddF0p6zN', name: 'Computadores' },
    { code: 'aka9LtIsRwK4VPqvdSw0', name: 'Impressoras' },
    { code: 'qTwfKyTAQoCtIEzAP5vp', name: 'Software' }
  ]

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

export function Resume({ formData }) {
  return (
    <WrapperQuestion>
      <legend>Resumo</legend>
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
        <label>{formData.especification}</label>

        <h4>Descrição:</h4>
        <label>{formData.description}</label>
      </WrapperResume>
    </WrapperQuestion>
  )
}
