import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const WrapperLoad = styled.span`
  svg {
    animation: ${rotate} 3s linear infinite;
  }
`
