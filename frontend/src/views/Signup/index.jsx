//import { useEffect, useState } from 'react'
import styles from './Signup.module.scss'
import { FaUser } from 'react-icons/fa'

const Signup = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   password2: '',
  // })

  // const { name, email, password, password2 } = formData

  return (
    <div className={styles.wrapper}>
      <h1>
        <FaUser />
        Signup
      </h1>
      <p>Please create account</p>
    </div>
  )
}

export default Signup