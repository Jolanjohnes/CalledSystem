import { WrapperAuth, Form } from './styles'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'

export function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(authContext)

  function handleSubmit(e) {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <WrapperAuth>
      <FaUserCircle size={100} />
      <Form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </div>
        {/* <a href="">Recuperar senha</a> */}
        <button type="submit">Entrar</button>
      </Form>
    </WrapperAuth>
  )
}
