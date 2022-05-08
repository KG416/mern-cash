// libs
import { useState } from 'react'

// components
import Section from '../../components/Section'
import Button from '../../components/Button'

// style & icons
import styles from './Signup.module.scss'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onSignupSubmit = () => console.log('onSignupSubmit')

  const onSignupChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    console.log('formData:', formData)
  }

  return (
    <div className={styles.wrapper}>
      <Section>
        <h1>Skapa konto</h1>
        <p>Please create an account</p>
      </Section>

      <Section>
        <form onSubmit={onSignupSubmit}>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onSignupChange}
          />

          <input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onSignupChange}
          />

          <input
            type='password'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onSignupChange}
          />

          <input
            type='password'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
            onChange={onSignupChange}
          />

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </form>
      </Section>
    </div>
  )
}

export default Signup
