import {
  addDoc,
  doc,
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
  updateDoc
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

export function CalledProvider({ children }) {
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

  async function getOpenCalled(email, privatePage = false, unit) {
    setLoading(true)

    const openCalled = collection(db, 'called')
    let q = query(
      openCalled,
      where('emailUser', '==', email),
      orderBy('createAt', 'desc')
    )

    if (privatePage) {
      q = query(
        openCalled,
        where('unit', 'in', unit),
        where('status', 'in', [0, 1, 2, 3]),
        orderBy('createAt', 'desc')
      )
    }

    const snapshot = await getDocs(q)

    const docs = []

    if (snapshot.empty) {
      setLoading(false)
      return docs
    }

    snapshot.forEach(item => {
      docs.push({
        code: item.id,
        avaliation: item.data().avaliation,
        cpf: item.data().cpf,
        nomeUser: item.data().nameUser,
        createAt: new Date(
          item.data().createAt.seconds * 1000
        ).toLocaleDateString('pt-br'),
        description: item.data().description,
        email: item.data().email,
        phone: item.data().phone,
        sector: item.data().sector,
        specification: item.data().specification,
        status: item.data().status,
        modification: item.data().modification,
        unit: item.data().unit
      })
    })

    setLoading(false)

    return docs
  }

  async function getEventsCalled(calledCode) {
    setLoading(true)

    const eventCalled = collection(db, `called/${calledCode}/events`)
    const q = query(eventCalled, orderBy('createAt', 'asc'))
    const snapshot = await getDocs(q)

    const docs = []

    if (snapshot.empty) {
      setLoading(false)
      return docs
    }

    snapshot.forEach(item => {
      docs.push({
        createAt: new Date(
          item.data().createAt.seconds * 1000
        ).toLocaleDateString('pt-br'),
        description: item.data().description
      })
    })

    setLoading(false)
    return docs
  }

  async function updateCalled(idCalled, param) {
    setLoading(true)

    const calledRef = doc(db, `called/${idCalled}`)

    const snapshot = await updateDoc(calledRef, {
      status: param
    })

    console.log(snapshot)
    setLoading(false)
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
        getSpecification,
        getEventsCalled,
        updateCalled
      }}
    >
      {children}
    </contextCalled.Provider>
  )
}
