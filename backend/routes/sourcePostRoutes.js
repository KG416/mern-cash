const express = require('express')
const router = express.Router()
const {
    getSourcePosts,
    setSourcePost,
    updateSourcePost,
    deleteSourcePost
} = require('../controllers/sourcePostController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getSourcePosts)
router.post('/', protect, setSourcePost)
router.put('/:id', protect, updateSourcePost)
router.delete('/:id', protect, deleteSourcePost)

module.exports = router