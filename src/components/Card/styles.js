import styled from 'styled-components'

export const WrapperCard = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 1px solid #eee5e9;
  border-radius: 0.5rem;
  padding: 1rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 700;
  }
`

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .action {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #eee5e9;
    border-radius: 0.5rem;
  }
`

export const OpenCalled = styled.div`
  display: absolute;
`
