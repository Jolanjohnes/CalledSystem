import { WrapperMain } from './../../global'
import { FollowMain, Cards } from './styles'

import { useContext, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { contextCalled } from './../../contexts/calledContext'
import { Card } from '../../components/Card'
import { Load } from '../../components/Load'

export function Follow() {
  const { getOpenCalled, updateCalled, loading } = useContext(contextCalled)
  const [calledOpen, setCalledOpen] = useState([])
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  function handleCloseOrOpenCalled(param) {
    if (param.key == 'close') {
      updateCalled(param.code, 3)
      return
    }

    updateCalled(param.code, 0)
    return
  }

  async function show() {
    const result = await getOpenCalled(email).then(res => res)
    if (result.length == 0) {
      setMsg(
        'Não encontrado chamados para o email digitado! Tente novamente por favor!'
      )
    }
    setCalledOpen(result)
  }

  return (
    <WrapperMain>
      <FollowMain>
        <div className="form">
          <h2>Acompanhe seu chamado</h2>

          <label htmlFor="">Informe seu email</label>
          <input
            type="email"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value)
            }}
          />
          <button onClick={show}>Buscar {loading ? <Load /> : ''}</button>
        </div>

        {calledOpen.length > 0 ? (
          <div className="result">
            {calledOpen.map(item => {
              return (
                <Cards>
                  <Card called={item} key={item.code} />
                  {item.status == 2 && (
                    <div className="btns">
                      <button
                        onClick={() => {
                          handleCloseOrOpenCalled({
                            key: 'open',
                            code: item.code
                          })
                        }}
                      >
                        Reabrir
                      </button>
                      <button
                        onClick={() => {
                          handleCloseOrOpenCalled({
                            key: 'close',
                            code: item.code
                          })
                        }}
                      >
                        Fechar
                      </button>
                    </div>
                  )}
                </Cards>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </FollowMain>
    </WrapperMain>
  )
}
