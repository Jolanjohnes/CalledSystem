import styled from 'styled-components'

export const Emotion = styled.div`
  margin-top: 0.5rem;

  gap: 1rem;
  flex-direction: row;

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
      color: #ffc857;
      cursor: pointer;
    }

    .active {
      color: #ffc857;
    }
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`
