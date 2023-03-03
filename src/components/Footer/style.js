import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid;

  padding: 1rem 2rem;

  .socialMedia {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    justify-content: space-between;

    p {
      font-size: 0.8rem;
    }

    div {
      display: flex;
      gap: 1rem;

      svg {
        :hover {
          fill: #6cae75;
          cursor: pointer;
          transform: scale(1.3);
        }
      }
    }
  }

  span {
    display: flex;
    font-size: 0.8rem;
    align-items: flex-end;
    gap: 0.1rem;
  }

  img {
    width: 5rem;
  }
`
