import styled from 'styled-components'

export const StepIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  //padding-block: 1rem;

  svg {
    fill: EEE5E9;
    width: 2rem;
    height: 2rem;
  }

  svg.active {
    fill: yellow;
  }
`
