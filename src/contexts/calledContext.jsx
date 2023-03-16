import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where
} from 'firebase/firestore'
import { createContext, useState } from 'react'
import { db } from '../config/firebaseConfig'

export const contextCalled = createContext({})
const INITIAL_FORM = {
  nameUser: '',
  emailUser: '',
  cpf: '',
  phone: '',
  unit: '',
  sector: '',
  specification: '',
  description: ''
}

export function CalledProvider({ children, action }) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [jumps, setJumps] = useState(0)

  function nextQuestion() {
    if (jumps < 4) {
      setJumps(state => state + 1)
    }
  }

  function previousQuestion() {
    if (jumps > 0) {
      setJumps(state => state - 1)
    }
  }

  function newCalled() {
    setFormData(INITIAL_FORM)
    setJumps(0)
  }

  async function sendCalled() {
    setLoading(true)

    const timestamp = Timestamp.fromDate(new Date())
    const docData = { ...formData, createAt: timestamp, status: 0 }

    await addDoc(collection(db, 'called'), docData)
      .then(data => {
        setLoading(false)
        nextQuestion()
        return data.id
      })
      .catch(err => {
        setLoading(false)
        console.log('Aconteceu um erro, tente mais tarde', err)
      })
  }

  async function getUnits() {
    setLoading(true)
    const list = []
    const especRef = collection(db, 'unidades')
    const q = query(especRef, orderBy('nome', 'asc'))
    const snapshot = await getDocs(q)

    snapshot.forEach(unit => {
      list.push({
        code: unit.id,
        name: unit.data().nome,
        sectores: unit.data().setores
      })
    })
    setLoading(false)
    return list
  }

  async function getSpecification() {
    const list = []
    const especRef = collection(db, 'especificacoes')
    const q = query(especRef, orderBy('descricao', 'asc'))
    const snapshot = await getDocs(q)

    snapshot.forEach(espec => {
      list.push({
        code: espec.id,
        name: espec.data().descricao
      })
    })

    return list
  }

  async function getOpenCalled(email) {
    setLoading(true)

    const openCalled = collection(db, 'called')
    const q = query(
      openCalled,
      where('emailUser', '==', email),
      orderBy('createAt', 'desc')
    )
    const snapshot = await getDocs(q)

    const docs = []

    if (snapshot.empty) {
      setLoading(false)
      return docs
    }

    snapshot.forEach(item => {
      docs.push({
        code: item.id,
        nomeUser: item.data().nameUser,
        specification: item.data().specification,
        createAt: new Date(
          item.data().createAt.seconds * 1000
        ).toLocaleDateString('pt-br'),
        modification: item.data().modification,
        status: item.data().status
      })
    })

    setLoading(false)

    return docs
  }

  return (
    <contextCalled.Provider
      value={{
        formData,
        setFormData,
        loading,
        jumps,
        nextQuestion,
        previousQuestion,
        newCalled,
        sendCalled,
        getOpenCalled,
        getUnits,
        getSpecification
      }}
    >
      {children}
    </contextCalled.Provider>
  )
}
