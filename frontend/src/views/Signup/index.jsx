// libs
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// utils
import { signup, reset } from '../../features/auth/authSlice'

// components
import Auth from '../../components/Auth'
import Loader from '../../components/Loader'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    console.log('UE signup')

    if (isError) toast.error(message)
    if (isSuccess || user) navigate('/')

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onSignupChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value)
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'password') setPassword(e.target.value)
    if (e.target.name === 'password2') setPassword2(e.target.value)
  }

  const onSignupSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) toast.error('Passwords do not match')

    const userData = {
      name,
      email,
      password,
    }

    dispatch(signup(userData))
  }

  if (isLoading) return <Loader />

  return (
    <>
      <Auth
        authType='signup'
        heading='Skapa konto'
        subHeading='tjenare Janne'
        submitText='Skapa konto'
        name={name}
        email={email}
        password={password}
        password2={password2}
        onSubmit={onSignupSubmit}
        onChange={onSignupChange}
      />
    </>
  )
}

export default Signup
