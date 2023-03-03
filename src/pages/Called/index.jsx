import { WrapperCalled, Button } from './styles'
import { Jumps } from './Jumps'
import { Identification, Local, Descripition, Resume } from './Questions'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { useState } from 'react'

import { FcPrevious, FcNext } from 'react-icons/fc'
import { FiSend } from 'react-icons/fi'

export function Called() {
  const [jumps, setJumps] = useState(0)
  console.log(jumps)

  function next() {
    if (jumps < 3) setJumps(state => state + 1)
  }

  function previous() {
    if (jumps > 0) {
      setJumps(state => state - 1)
    }
  }

  function showQuestion(jump) {
    switch (jump) {
      case 0:
        return <Identification />
      case 1:
        return <Local />
      case 2:
        return <Descripition />
      case 3:
        return <Resume />
      default:
        break
    }
  }

  return (
    <WrapperCalled>
      <Header />
      <div className="main">
        <Jumps />

        {showQuestion(jumps)}

        <div className="btns">
          {jumps > 0 && (
            <Button onClick={previous}>
              <FcPrevious /> Anterior
            </Button>
          )}
          <Button onClick={next}>
            {jumps === 3 ? 'Enviar' : 'Próximo'}

            {jumps === 3 ? <FiSend /> : <FcNext />}
          </Button>
        </div>
      </div>
      <Footer />
    </WrapperCalled>
  )
}
