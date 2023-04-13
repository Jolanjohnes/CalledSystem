import { Content, Container, Nav, Profile, Table } from './style'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { useState } from 'react'
import { useEffect } from 'react'
import { contextCalled } from '../../contexts/calledContext'

export function Dashboard() {
  const { user } = useContext(authContext)
  const { getOpenCalled } = useContext(contextCalled)

  const [showModal, setShowModal] = useState(false)
  const [listCalled, setListCalled] = useState([])
  const [calledSelected, setCalledSelected] = useState({})

  function handleShowModal(called) {
    setShowModal(!showModal)
    setCalledSelected(called)
  }

  async function getListCalled() {
    const list = await getOpenCalled(user.email, true, [
      'Maternidade de Alta Complexidade do Maranhão (MACMA)',
      'Maternidade Nª Sª da Penha'
    ]).then(data => {
      return data
    })

    setListCalled(list)
  }

  useEffect(() => {
    getListCalled()
  }, [])

  return (
    <Container>
      <Nav>
        <h1>DASHBOARD</h1>

        <Profile>
          <img src="https://github.com/jolanjohnes.png" alt="Avatar usuário" />
          <p>{user?.email}</p>
          <Link to={'/'}>Sair</Link>
        </Profile>
      </Nav>
      <Content>
        <h1>Lista de chamados em aberto</h1>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Setor</th>
              <th>Especificação</th>
              <th>Status</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {listCalled.map(row => {
              return (
                <tr key={row.code}>
                  <td>{String(row.code).toUpperCase()}</td>
                  <td>{row.nomeUser.toUpperCase()}</td>
                  <td>{row.sector.toUpperCase()}</td>
                  <td>{row.specification.toUpperCase()}</td>
                  <td>{row.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleShowModal(row)
                      }}
                    >
                      Visualizar
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        {showModal && (
          <Modal closeModal={handleShowModal} called={calledSelected} />
        )}
      </Content>
    </Container>
  )
}
