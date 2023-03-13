import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp
} from 'firebase/firestore'
import { createContext, useEffect, useState } from 'react'
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

export function ContextProvider({ children }) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [jumps, setJumps] = useState(0)

  const [listUnits, setListUnit] = useState([])
  const [listSpecification, setListSpecification] = useState([])

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

    setListUnit(list)
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

    setListSpecification(list)
  }

  useEffect(() => {
    getUnits()
    getSpecification()
  }, [])

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
        listUnits,
        listSpecification
      }}
    >
      {children}
    </contextCalled.Provider>
  )
}
