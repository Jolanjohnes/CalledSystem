import { useContext, useState } from 'react'
import { contextCalled } from '../../contexts/calledContext'
import { Events } from './Events'
import { Load } from '../../components/Load'
import { WrapperCard, HeaderCard, DetailCard, OpenCalled } from './styles'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useEffect } from 'react'

export function Card({ called, showDetails = false }) {
  const [view, setView] = useState(showDetails)
  const [reabrir, setReabrir] = useState(false)
  const [events, setEvents] = useState([])
  const { getEventsCalled, updateCalled, loading } = useContext(contextCalled)

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

  async function getDetail() {
    const result = await getEventsCalled(called.code).then(res => res)
    setEvents(result)
  }

  async function handleViewDetail() {
    // if (view == false) {
    //   const result = await getEventsCalled(called.code).then(res => res)
    //   setEvents(result)
    // }
    setView(state => !state)
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <WrapperCard className="card">
      <HeaderCard>
        <div>
          <p>
            <span>Codigo:</span> {called.code}{' '}
          </p>
          <p>
            <span>Unidade:</span> {called.unit}{' '}
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
            <div className="contacts">
              <h4>Contatos</h4>
              <p>
                <span>Usuário:</span> {called.nomeUser}{' '}
              </p>
              <p>
                <span>Tel.:</span>
                {called.phone}
              </p>
              <p>
                <span>Email.:</span>
                {called.email}
              </p>
            </div>

            <div>
              <h4>Descirção do Problema (Usuário)</h4>
              <p>{called.description}</p>
            </div>

            <div className="events">
              <h4>Ações Realizadas</h4>
              {loading && (
                <p>
                  <Load /> Carregando...
                </p>
              )}
              {events.map((item, index) => {
                return <Events key={index} item={item} />
              })}
            </div>
          </>
        )}
      </DetailCard>
    </WrapperCard>
  )
}
