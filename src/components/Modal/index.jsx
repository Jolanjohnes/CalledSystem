import { MyModal } from './style'
import { Card } from './../Card'
export function Modal({ closeModal, called }) {
  return (
    <MyModal>
      <div className="header">
        <h1>Detalhamento Chamado</h1>
        <button
          onClick={() => {
            closeModal()
          }}
        >
          X
        </button>
      </div>
      <Card called={called} showDetails={true} />
      <div className="actions">
        <button>Atender</button>
        <button>Adicionar Ação</button>
        <button>Finalizar</button>
      </div>
    </MyModal>
  )
}
