const express = require('express')
const router = express.Router()

const {
    signupUser,
    loginUser,
    getUser,
} = require('../controllers/userController')

router.post('/', signupUser)
router.post('/login', loginUser)
router.get('/user', getUser)

module.exports = router