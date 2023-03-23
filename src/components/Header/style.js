import styled from 'styled-components'

export const WrapperHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee5e9;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;

    h3 {
      display: none;
    }
  }
`

export const ImageLogo = styled.img`
  width: 5rem;
  align-self: flex-start;
`

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-left: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    list-style: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: inherit;
    position: relative;
    /* padding: 0.5rem;
    border: 1px solid white; */

    :hover::after {
      width: 100%;
    }

    ::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -3px;
      width: 0%;
      transition: ease-in-out 0.3s;
      background-color: #ffc857;
      height: 3px;
    }

    :last-child {
      align-self: flex-end;
      justify-content: flex-end;
    }

    a {
      text-decoration: none;
      :visited {
        color: inherit;
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    margin-block: 1rem;
    align-items: flex-end;
  }
`
