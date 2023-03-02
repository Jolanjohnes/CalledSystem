import { StepIcons } from './styles.js'
import { ImUser } from 'react-icons/im'
import { RiMapPinUserFill } from 'react-icons/ri'
import { MdDescription } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import { RiSeparator } from 'react-icons/ri'

export function Jumps() {
  return (
    <div>
      <StepIcons>
        <ImUser color="#6cae75" />
        <RiSeparator />
        <RiMapPinUserFill />
        <RiSeparator />
        <MdDescription />
        <RiSeparator />
        <IoIosSend />
      </StepIcons>
    </div>
  )
}
