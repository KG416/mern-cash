// libs
import { useState } from 'react'
import AuthView from '../../components/AuthView'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const onLoginSubmit = (e) => {
    e.preventDefault()
    console.log('onLoginSubmit')
  }

  const onLoginChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AuthView
      heading='Logga in'
      subHeading='tjenare Janne'
      submitText='Logga in'
      formData={formData}
      onSubmit={onLoginSubmit}
      onChange={onLoginChange}
    />
  )
}

export default Login
