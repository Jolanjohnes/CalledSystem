import styled from 'styled-components'
export const MyModal = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #000000ed;

  border-radius: 1rem;
  position: absolute;
  color: white;

  transition: ease-in 0.3s;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    button {
      background: white;
      color: black;
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      border-radius: 50%;
      :hover {
        transform: scale(0.9);
      }
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    gap: 1rem;

    button {
      width: 8rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s;

      :hover {
        transform: scale(0.9);
      }
    }
  }
`
