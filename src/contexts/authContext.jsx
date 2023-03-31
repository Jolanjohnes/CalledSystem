import { createContext } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const authContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const [load, setLoad] = useState(false)

  const navigate = useNavigate()

  async function signIn(email, password) {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        setUser(userCredential.user)
        navigate('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <authContext.Provider
      value={{
        signIn,
        user
      }}
    >
      {children}
    </authContext.Provider>
  )
}
