import { WrapperCard } from './styles'
export function Card({ called }) {
  return (
    <WrapperCard className="card">
      <div>
        <h4>Codigo: {called.code} </h4>
        <p>Staus: {called.status === 0 ? 'Aberto' : 'Fechado'}</p>
        <p>{called.createAt}</p>
      </div>
      <div>
        <p>Especificação: {called.specification} </p>
        <button>Visualizar</button>
      </div>
    </WrapperCard>
  )
}
