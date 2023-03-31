import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
`

export const Welcome = styled.div`
  padding-top: 5rem;
  padding-left: 2rem;
  height: 100%;

  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  div.links {
    flex-direction: row;
    margin-top: 2rem;
    align-self: flex-start;
    justify-content: flex-start;
  }

  a {
    border: 1px solid #ffc857;
    padding: 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    :visited {
      color: #ffc857;
    }

    :hover {
      background-color: #eee5e9;
      color: #08415c;
      border-color: #08415c;
    }
  }
`
