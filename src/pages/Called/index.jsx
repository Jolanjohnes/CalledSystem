import { Jumps } from './Jumps'
import { Identification } from './Questions'
import { WrapperCalled, Button } from './styles'

export function Called() {
  return (
    <WrapperCalled>
      <Jumps />
      <Identification />
      <Button>Próximo</Button>
    </WrapperCalled>
  )
}
