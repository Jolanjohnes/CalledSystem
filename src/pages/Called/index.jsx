import { WrapperCalled, Button } from './styles'
import { useContext, useEffect } from 'react'

import { contextCalled } from './../../contexts/calledContext'

import { Jumps } from './Jumps'
import { Identification } from './Questions/Identification'
import { Local } from './Questions/Local'
import { Description } from './Questions/Descripition'
import { Resume } from './Questions/Resume'
import { Message } from './Questions/Message'

import { FcPrevious, FcNext } from 'react-icons/fc'
import { FiSend } from 'react-icons/fi'

export function Called() {
  const {
    loading,
    jumps,
    nextQuestion,
    previousQuestion,
    newCalled,
    sendCalled
  } = useContext(contextCalled)

  function showQuestion(jump) {
    switch (jump) {
      case 0:
        return <Identification />
      case 1:
        return <Local />
      case 2:
        return <Description />
      case 3:
        return <Resume />
      case 4:
        return <Message />
      default:
        break
    }
  }

  return (
    <WrapperCalled>
      <div className="main">
        <Jumps jump={jumps} />

        {showQuestion(jumps)}

        <div className="btns">
          {jumps > 0 && jumps < 4 && (
            <Button onClick={previousQuestion}>
              <FcPrevious /> Anterior
            </Button>
          )}

          <Button
            onClick={
              jumps < 3 ? nextQuestion : jumps == 3 ? sendCalled : newCalled
            }
          >
            {jumps < 3 ? (
              <>
                Próximo <FcNext />
              </>
            ) : jumps == 3 ? (
              <>
                Enviar <FiSend />
              </>
            ) : (
              'Novo'
            )}
          </Button>
        </div>
      </div>
    </WrapperCalled>
  )
}
