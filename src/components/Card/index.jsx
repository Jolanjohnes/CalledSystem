import { useContext, useState } from 'react'
import { contextCalled } from '../../contexts/calledContext'
import { Assessment } from '../Assessment'
import { Events } from './Events'
import { WrapperCard, Result } from './styles'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export function Card({ called }) {
  const [view, setView] = useState(false)
  const [events, setEvents] = useState([])
  const { getEventsCalled } = useContext(contextCalled)
  const status = [
    'Aberto',
    'Em andamento',
    'Aguardando validação',
    'Reiniciado'
  ]

  async function handleViewDetail() {
    if (view == false) {
      const result = await getEventsCalled(called.code).then(res => res)
      setEvents(result)
      console.log(result)
    }
    setView(state => !state)
  }
  const isDisable = called.status == 2 && called.avaliation

  return (
    <WrapperCard className="card">
      <div>
        <h4>Codigo: {called.code} </h4>
        <p>Staus: {status[called.status]}</p>
        <p>{called.createAt}</p>
      </div>
      <div>
        <p>Especificação: {called.specification} </p>
        {isDisable ? (
          <Assessment avaliation={called.avaliation} />
        ) : (
          <button
            disabled={isDisable}
            onClick={() => {
              handleViewDetail()
            }}
          >
            {view ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        )}
      </div>

      {view ? (
        <Result>
          <div>
            <h4>Descirção do Problema (Usuário)</h4>
            <p>{called.description}</p>
          </div>
          <div>
            <h4>Ações Realizadas</h4>
            {events.map((item, index) => {
              return <Events key={index} item={item} />
            })}
          </div>
          {called.status === 2 ? (
            <>
              {' '}
              <button>Fechar Chamado</button> <button>Reabrir Chamado</button>{' '}
            </>
          ) : (
            ''
          )}
        </Result>
      ) : (
        ''
      )}
    </WrapperCard>
  )
}
