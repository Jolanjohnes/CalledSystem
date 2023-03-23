import { Link, useRouteError } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'
import { WrapperERROR } from './styles'

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
    <WrapperERROR>
      <h1>Oops!</h1>
      <div>
        <TbError404 size={100} />

        <div className="info">
          <p>Página não encontrada</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>

      <Link to={'/'}>Voltar a página inicial</Link>
    </WrapperERROR>
  )
}
