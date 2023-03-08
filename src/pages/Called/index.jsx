import { WrapperCalled, Button } from './styles'
import { Jumps } from './Jumps'
import { Identification } from './Questions/Identification'
import { Local } from './Questions/Local'
import { Description } from './Questions/Descripition'
import { Resume } from './Questions/Resume'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { useState } from 'react'

import { FcPrevious, FcNext } from 'react-icons/fc'
import { FiSend } from 'react-icons/fi'

import { db } from '../../config/firebaseConfig'
import { addDoc, Timestamp, collection } from 'firebase/firestore'
import { Load } from '../../components/Load'

export function Called() {
  const InitialFomr = {
    nameUser: '',
    emailUser: '',
    cpf: '',
    phone: '',
    unit: '',
    sector: '',
    especification: '',
    description: ''
  }

  const [jumps, setJumps] = useState(0)
  const [formData, setFormData] = useState(InitialFomr)
  const [loading, setLoading] = useState(false)

  function next() {
    if (jumps < 3) setJumps(state => state + 1)
  }

  function previous() {
    if (jumps > 0) {
      setJumps(state => state - 1)
    }
  }

  async function sendCalled() {
    // const apiWthast = `https://wa.me/5598992383718?text=*NOVO CHAMADO ABERTO - Nº -----*\n\n
    // *Nome do úsuario:* ${formData.nameUser}\n
    // *Email úsuario:* ${formData.emailUser}\n
    // *Tel:* ${formData.phone}\n
    // *unidade:* ${formData.unit}\n
    // *setor: ${formData.sector}\n
    // *Natureza do Problema: ${formData.especification}\n
    // *Descrição do Problema:* ${formData.description}\n
    // `
    // const msgEncode = encodeURI(apiWthast)
    // return msgEncode
    setLoading(true)
    const timestamp = Timestamp.fromDate(new Date())
    const docData = { ...formData, createAt: timestamp, status: 0 }

    const docRef = await addDoc(collection(db, 'called'), docData)

    setLoading(false)
  }

  function showQuestion(jump) {
    switch (jump) {
      case 0:
        return <Identification formData={formData} setFormData={setFormData} />
      case 1:
        return <Local formData={formData} setFormData={setFormData} />
      case 2:
        return <Description formData={formData} setFormData={setFormData} />
      case 3:
        return <Resume formData={formData} setFormData={setFormData} />
      default:
        break
    }
  }

  return (
    <WrapperCalled>
      <Header />
      <div className="main">
        <Jumps jump={jumps} />

        {loading ? <Load modulo={'Registro de Chamado!'} /> : ''}

        {showQuestion(jumps)}

        <div className="btns">
          {jumps > 0 && (
            <Button onClick={previous}>
              <FcPrevious /> Anterior
            </Button>
          )}

          {jumps === 3 ? (
            <Button
              onClick={() => {
                sendCalled()
              }}
            >
              ENVIAR
              <FiSend />
            </Button>
          ) : (
            <Button onClick={next}>
              Próximo <FcNext />
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </WrapperCalled>
  )
}
