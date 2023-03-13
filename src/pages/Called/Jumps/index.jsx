import { StepIcons } from './styles.js'
import { ImUser } from 'react-icons/im'
import { RiMapPinUserFill } from 'react-icons/ri'
import { MdDescription } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import { RiSeparator } from 'react-icons/ri'

import { useContext } from 'react'
import { contextCalled } from '../../../contexts/calledContext'

export function Jumps() {
  const COLOR_SELECTION = '#ffc857'
  const { jumps } = useContext(contextCalled)

  if (jumps === 4) {
    return
  }

  return (
    <div>
      <StepIcons>
        <ImUser color={jumps >= 0 ? COLOR_SELECTION : ''} />
        <RiSeparator color={jumps >= 1 ? COLOR_SELECTION : ''} />
        <RiMapPinUserFill color={jumps >= 1 ? COLOR_SELECTION : ''} />
        <RiSeparator color={jumps >= 2 ? COLOR_SELECTION : ''} />
        <MdDescription color={jumps >= 2 ? COLOR_SELECTION : ''} />
        <RiSeparator color={jumps >= 3 ? COLOR_SELECTION : ''} />
        <IoIosSend color={jumps >= 3 ? COLOR_SELECTION : ''} />
      </StepIcons>
    </div>
  )
}
