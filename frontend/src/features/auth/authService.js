import axios from 'axios'

const API_URL = '/api/users/'

// signup user
const signup = async (userData) => {
    const res = await axios.post(API_URL, userData)

    if(!res.data) {
        console.log(`error: no data from POST to ${API_URL}`)
    }
    
    localStorage.setItem('user', JSON.stringify(res.data))
    return res.data
}

// login user
const login = async (userData) => {
    const res = await axios.post(`${API_URL}login`, userData)

    if (!res.data) {
        console.log(`error: no data from POST to ${API_URL}`)
    }

    localStorage.setItem('user', JSON.stringify(res.data))
    return res.data
}

// logout user
// TODO: fast/temp solution, make it more robust
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    signup,
    login,
    logout,
}

export default authService