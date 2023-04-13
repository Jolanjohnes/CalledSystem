import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const Nav = styled.nav`
  width: 100;
  /* height: 10%; */

  /* border: 1px solid yellow; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-block: 1rem;

  border-bottom: 1px solid white;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  width: 100%;

  img {
    max-width: 3rem;
  }
`

export const Content = styled.div`
  position: relative;

  width: 100%;
  flex-grow: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
  transition: all 0.5s;
`

export const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
  border: 1px solid white;
  border-collapse: collapse;

  td,
  th {
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    text-align: center;
    padding: 0.5rem;
  }

  th {
    background-color: white;
    color: black;
  }

  button {
    background: none;
    padding: 0.5rem;
    border: none;
    cursor: pointer;

    :hover {
      transform: scale(0.9);
      background-color: green;
    }
  }
`
