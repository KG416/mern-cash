// components
import Section from '../Section'
import Button from '../Button'

// style
import styles from './Auth.module.scss'

function Auth({
  authType = '',
  heading = '',
  subHeading = '',
  submitText = '',
  name,
  email,
  password,
  password2,
  onSubmit = () => {},
  onChange = () => {},
}) {

  return (
    <div className={styles.wrapper}>
      <Section>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
      </Section>

      <Section>
        <form onSubmit={onSubmit}>
          {authType === 'signup' && (
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

          {authType === 'signup' && (
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

export default Auth
