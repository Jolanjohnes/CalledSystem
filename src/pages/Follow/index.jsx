import { WrapperMain } from './../../global'
import { FollowMain } from './styles'

import { useContext, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { contextCalled } from './../../contexts/calledContext'
import { Card } from '../../components/Card'
import { Load } from '../../components/Load'

export function Follow() {
  const { getOpenCalled, loading } = useContext(contextCalled)
  const [calledOpen, setCalledOpen] = useState([])
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

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
      <Header />
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
              return <Card called={item} key={item.code} />
            })}
          </div>
        ) : (
          <p>{msg}</p>
        )}
      </FollowMain>
      <Footer />
    </WrapperMain>
  )
}
