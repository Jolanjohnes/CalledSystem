import { Link } from 'react-router-dom'
import { Welcome, WrapperList, Wrapper } from './styles'
export function Main() {
  return (
    <Wrapper>
      <Welcome>
        <div>
          <h1>Bem vindo ao sistema de chamados.</h1>
          <h3>Por aqui você terá seu problema solucionado mais rápido.</h3>
        </div>

        <div className="links">
          <Link to={'/newCalled'}>Novo Chamado</Link>
          <Link to={'/follow'}>Acomanhar seus chamados</Link>
        </div>
      </Welcome>
    </Wrapper>
  )
}
