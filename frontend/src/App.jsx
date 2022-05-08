// libs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// components
import Container from './components/Container'
import Dashboard from './views/Dashboard'
import Signup from './views/Signup'
import Login from './views/Login'
import Header from './components/Header'

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Container>
  )
}

export default App
