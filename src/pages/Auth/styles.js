import styled from 'styled-components'

export const WrapperAuth = styled.div`
  width: 100%;
  /* background-color: #d2e5; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    margin-top: 2rem;
    padding: 0.5rem;
    background-color: #eee5e9;
    color: #08415c;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: #08415c;
      border-color: #eee5e9;
      color: #eee5e9;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    input {
      padding: 0.5rem;
      border: none;
      border-radius: 0.3rem;
      width: 20rem;
      background-color: #dee1e6;
      color: #08415c;
      font-weight: 500;
    }
  }
`
