// components
import Section from '../Section'
import Button from '../Button'

// style
import styles from './AuthView.module.scss'

function AuthView({
  heading = '',
  subHeading = '',
  submitText = '',
  formData = {},
  onSubmit = () => {},
  onChange = () => {},
}) {
  const { name, email, password, password2 } = formData
  const AUTH_TYPE = 'password2' in formData ? 'signup' : 'login'

  return (
    <div className={styles.wrapper}>
      <Section>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
      </Section>

      <Section>
        <form onSubmit={onSubmit}>
          {AUTH_TYPE === 'signup' && (
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              placeholder='Namn'
              onChange={onChange}
            />
          )}

          <input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='Mail'
            onChange={onChange}
          />

          <input
            type='password'
            id='password'
            name='password'
            value={password}
            placeholder='Lösenord'
            onChange={onChange}
          />

          {AUTH_TYPE === 'signup' && (
            <input
              type='password'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Upprepa lösenord'
              onChange={onChange}
            />
          )}

          <Button variant='primary' type='submit'>
            {submitText}
          </Button>
        </form>
      </Section>
    </div>
  )
}

export default AuthView
