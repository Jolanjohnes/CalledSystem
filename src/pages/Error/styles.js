import styled from 'styled-components'

export const WrapperERROR = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0;
    }
  }
`
