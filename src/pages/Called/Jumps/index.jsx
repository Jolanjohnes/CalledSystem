import { StepIcons } from './styles.js'
import { ImUser } from 'react-icons/im'
import { RiMapPinUserFill } from 'react-icons/ri'
import { MdDescription } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import { RiSeparator } from 'react-icons/ri'

export function Jumps({ jump }) {
  const COLOR_SELECTION = '#6CAE75'
  return (
    <div>
      <StepIcons>
        <ImUser color={jump >= 0 ? COLOR_SELECTION : ''} />
        <RiSeparator color={jump >= 1 ? COLOR_SELECTION : ''} />
        <RiMapPinUserFill color={jump >= 1 ? COLOR_SELECTION : ''} />
        <RiSeparator color={jump >= 2 ? COLOR_SELECTION : ''} />
        <MdDescription color={jump >= 2 ? COLOR_SELECTION : ''} />
        <RiSeparator color={jump >= 3 ? COLOR_SELECTION : ''} />
        <IoIosSend color={jump >= 3 ? COLOR_SELECTION : ''} />
      </StepIcons>
    </div>
  )
}
