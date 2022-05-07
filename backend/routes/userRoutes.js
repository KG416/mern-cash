const express = require('express')
const router = express.Router()

const {
    signupUser,
    loginUser,
    getUser,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', signupUser)
router.post('/login', loginUser)
router.get('/user', protect, getUser)

module.exports = router