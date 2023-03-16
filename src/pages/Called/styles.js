import styled from 'styled-components'
import { WrapperMain } from './../../global'

export const WrapperCalled = styled(WrapperMain)`
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;

    polygon {
      fill: #08415c;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.7rem;
  font-weight: 700;
  width: 8rem;

  background-color: #eee5e9;
  color: #08415c;

  text-transform: uppercase;
  border: none;
  border-radius: 0.3rem;
  transition: ease-in-out 0.3s;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    background-color: #ffc857;
  }
`
