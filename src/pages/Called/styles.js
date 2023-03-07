import styled from 'styled-components'

export const WrapperCalled = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btns {
    display: flex;
    gap: 1rem;

    button {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      width: 8rem;

      polygon {
        fill: rgb(238, 229, 233);
      }
    }
  }
`

export const Button = styled.button`
  padding: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;
  transition: ease-in-out 0.3s;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    background-color: #6cae75;
  }
`
