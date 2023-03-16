import styled from 'styled-components'

export const WrapperCard = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex-grow: 1;
  border: 1px solid #eee5e9;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    cursor: pointer;
    background-color: #eee5e9;
    color: #08415c;
    font-weight: 700;
    transition: ease-in-out 0.2s;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    :hover {
      background-color: #ffc857;
    }
  }
`
