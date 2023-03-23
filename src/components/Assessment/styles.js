import styled from 'styled-components'

export const Emotion = styled.div`
  margin-top: 0.5rem;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    :hover {
      cursor: pointer;
      color: #ffc857;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`
