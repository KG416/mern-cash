// libs
import { useState } from 'react'
import AuthView from '../../components/AuthView'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const onSignupSubmit = (e) => {
    e.preventDefault()
    console.log('onSignupSubmit')
  }

  const onSignupChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AuthView
      heading='Skapa konto'
      subHeading='tjenare Janne'
      submitText='Skapa konto'
      formData={formData}
      onSubmit={onSignupSubmit}
      onChange={onSignupChange}
    />
  )
}

export default Signup
