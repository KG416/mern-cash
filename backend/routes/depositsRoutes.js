const express = require('express')
const router = express.Router()
const {
    getDeposits,
    setDeposit,
    updateDeposit,
    deleteDeposit,
} = require('../controllers/depositsController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getDeposits)
router.post('/', protect, setDeposit)
router.put('/:id', protect, updateDeposit)
router.delete('/:id', protect, deleteDeposit)

module.exports = router