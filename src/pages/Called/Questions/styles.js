import styled from 'styled-components'

export const WrapperQuestion = styled.fieldset`
  width: 80%;
  padding: 1rem;
  border-radius: 0.3rem;

  legend {
    font-size: 1.5rem;
    text-align: center;
    padding-inline: 1rem;
  }
`

export const WrapperContact = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const WrapperField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-top: 0.3rem;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem;
    outline: none;
  }
`
