import { WrapperCalled, Button } from './styles'
import { Jumps } from './Jumps'
import { Identification, Local, Description, Resume } from './Questions'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { useState } from 'react'

import { FcPrevious, FcNext } from 'react-icons/fc'
import { FiSend } from 'react-icons/fi'

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

  function next() {
    if (jumps < 3) setJumps(state => state + 1)
  }

  function previous() {
    if (jumps > 0) {
      setJumps(state => state - 1)
    }
  }

  const sendCalled = () => {
    const apiWthast = `https://wa.me/5598992383718?text=*NOVO CHAMADO ABERTO - Nº -----*\n\n
    *Nome do úsuario:* ${formData.nameUser}\n
    *Email úsuario:* ${formData.emailUser}\n
    *Tel:* ${formData.phone}\n
    *unidade:* ${formData.unit}\n
    *setor: ${formData.sector}\n
    *Natureza do Problema: ${formData.especification}\n
    *Descrição do Problema:* ${formData.description}\n
    `
    const msgEncode = encodeURI(apiWthast)

    return msgEncode
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

        {showQuestion(jumps)}

        <div className="btns">
          {jumps > 0 && (
            <Button onClick={previous}>
              <FcPrevious /> Anterior
            </Button>
          )}

          {jumps === 3 ? (
            <Button>
              <a href={sendCalled()} target="_blank" rel="noopener noreferrer">
                ENVIAR
              </a>
              <FiSend />
            </Button>
          ) : (
            <Button onClick={next}>
              Próximo <FcNext />
            </Button>
          )}

          {/* <Button onClick={next}>
            {jumps === 3 ? 'Enviar' : 'Próximo'}

            {jumps === 3 ? <FiSend /> : <FcNext />}
          </Button> */}
        </div>
      </div>
      <Footer />
    </WrapperCalled>
  )
}
