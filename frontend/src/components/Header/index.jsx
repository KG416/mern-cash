// libs
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// style & icons
import styles from './Header.module.scss'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

// components
import Button from '../Button'

// utils
import { logout, reset } from '../../features/auth/authSlice'

function Header () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to='/'>CASH (logo)</Link>
      </div>

      <ul>
        {user ? (
          <li>
            <Button to='/logout' variant='secondary' onButtonClick={onLogout}>
              <FaSignOutAlt /> Logga ut
            </Button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Logga in
              </Link>
            </li>

            <li>
              <Link to='/signup'>
                <FaUser /> Skapa konto
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
