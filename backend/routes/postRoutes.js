const express = require('express')
const router = express.Router()
const {
    getPosts,
    setPost,
    updatePost,
    deletePost
} = require('../controllers/postController')

const { protect } = require('../middleware/authMiddleware')

// TODO: protect not working here, I can still get all posts without token

router.get('/', protect, getPosts)
router.post('/', protect, setPost)
router.put('/:id', protect, updatePost)
router.delete('/:id', protect, deletePost)

module.exports = router