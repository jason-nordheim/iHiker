import React from 'react'
import useAppContext from '../hooks/useAppContext'
import { auth, provider } from '../config/firebase'

const Login = () => {
  const appContext = useAppContext()

  const signInHandler = event => {
    event.preventDefault()
    console.log(auth.app)
  }

  return (
    <div className="login">
      <button onClick={signInHandler}>
        Login
      </button>
    </div>
  )
}

export default Login
