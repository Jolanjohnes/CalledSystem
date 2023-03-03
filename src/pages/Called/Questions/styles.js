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
  margin-bottom: 0.5rem;

  input,
  select,
  textarea {
    margin-top: 0.3rem;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem;
    outline: none;
  }

  textarea {
    resize: none;
    height: 8rem;
  }
`

export const WrapperResume = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-row-gap: 0.5rem;
`
