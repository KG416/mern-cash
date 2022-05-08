// libs
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// utils
import { login, reset } from '../../features/auth/authSlice'

// components
import Auth from '../../components/Auth'
import Loader from '../../components/Loader'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    console.log('UE login')

    if (isError) toast.error(message)
    if (isSuccess || user) navigate('/')

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onLoginChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'password') setPassword(e.target.value)
  }

  const onLoginSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) return <Loader />

  return (
    <Auth
      authType='login'
      heading='Logga in'
      subHeading='tjenare Janne'
      submitText='Logga in'
      email={email}
      password={password}
      onSubmit={onLoginSubmit}
      onChange={onLoginChange}
    />
  )
}

export default Login
