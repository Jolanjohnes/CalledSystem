import { useContext, useState } from 'react'
import { contextCalled } from '../../contexts/calledContext'
import { Events } from './Events'
import { Load } from '../../components/Load'
import { WrapperCard, HeaderCard, DetailCard, OpenCalled } from './styles'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export function Card({ called }) {
  const [view, setView] = useState(false)
  const [reabrir, setReabrir] = useState(false)
  const [events, setEvents] = useState([])
  const { getEventsCalled, updateCalled } = useContext(contextCalled)

  const ABERTO = 0
  const EM_ANDAMENTO = 1
  const AGUARDANDO_VALIDACAO = 2
  const FECHADO = 3

  const status = [
    'Aberto',
    'Em andamento',
    'Aguardando validação',
    'FECHADO',
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

  function handleCloseOrOpenCalled(key) {
    if (key == 'close') {
      updateCalled(called.code, 3)
      return
    }

    updateCalled(called.code, 0)
    return
  }

  return (
    <WrapperCard className="card">
      <HeaderCard>
        <div>
          <p>
            <span>Codigo:</span> {called.code}{' '}
          </p>
          <p>
            <span>Especificação:</span> {called.specification}{' '}
          </p>
        </div>
        <div>
          <p>
            <span>Staus:</span> {status[called.status]}
          </p>
          <p>
            <span>Criando em:</span>
            {called.createAt}
          </p>
        </div>
      </HeaderCard>
      <DetailCard>
        <button
          disabled={called.status === FECHADO}
          onClick={() => {
            handleViewDetail()
          }}
        >
          {view ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </button>

        {view && (
          <>
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
            {called.status === AGUARDANDO_VALIDACAO && (
              <div>
                <button
                  className="action"
                  onClick={() => {
                    handleCloseOrOpenCalled('close')
                  }}
                >
                  Fechar Chamado
                </button>{' '}
                <button
                  className="action"
                  onClick={() => {
                    handleCloseOrOpenCalled('open')
                  }}
                >
                  Reabrir Chamado
                </button>{' '}
              </div>
            )}
          </>
        )}
      </DetailCard>
    </WrapperCard>
  )
}
