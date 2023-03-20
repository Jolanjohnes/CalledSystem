import styled from 'styled-components'

export const FollowMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  padding: 1rem 2rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-shrink: 0;

    input,
    button {
      border: none;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    button {
      cursor: pointer;
      background-color: #eee5e9;
      color: #08415c;
      font-weight: 700;
      transition: ease-in-out 0.3s;

      :hover {
        background-color: #ffc857;
      }
    }
  }
  .result {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`
