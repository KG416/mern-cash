import styles from './Header.module.scss'
import { FaSignInAlt, /* FaSignOutAlt,*/ FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to='/'>CASH (logo)</Link>
      </div>

      <ul>
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
      </ul>
    </header>
  )
}

export default Header
