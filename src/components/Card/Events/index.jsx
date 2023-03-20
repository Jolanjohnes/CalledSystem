import { WrapperEvent } from './style'
export function Events({ item }) {
  return (
    <WrapperEvent>
      <p>
        <span>Data:</span>
        {item.createAt}
      </p>
      <p>
        <span>Descrição:</span> {item.description}
      </p>
    </WrapperEvent>
  )
}
