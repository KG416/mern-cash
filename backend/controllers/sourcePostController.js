const asyncHandler = require('express-async-handler')
const SourcePost = require('../models/sourcePostModel')
const User = require('../models/userModel')

const getSourcePosts = async (req, res) => {
    const sourcePosts = await SourcePost.find({ user: req.user.id })

    res.status(200).json(sourcePosts)
}

const setSourcePost = asyncHandler(async (req, res) => {
    if (!req.body.sources) {
        res.status(400)
        throw new Error('Please add sources (an array of objects)')
    }

    const sourcePost = await SourcePost.create({
        sources: req.body.sources,
        user: req.user.id,
    })

    res.status(200).json(sourcePost)
})

const updateSourcePost = asyncHandler(async (req, res) => {
    const sourcePost = await SourcePost.findById(req.params.id)

    if (!sourcePost) {
        res.status(400)
        throw new Error('Source post not found')
    }

    const user = await User.findById(req.user.id)
    
    if (!user) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not found')
    }
    
    if (sourcePost.user.toString() !== user.id) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedSourcePost = await SourcePost.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedSourcePost)
})

const deleteSourcePost = asyncHandler(async (req, res) => {
    const id = req.params.id
    const sourcePost = await SourcePost.findById(id)

    if (!sourcePost) {
        res.status(400)
        throw new Error('Source post not found')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not found')
    }

    if (sourcePost.user.toString() !== user.id) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not authorized')
    }

    await sourcePost.remove()
    res.status(200).json({ id: id })
})

module.exports = {
    getSourcePosts,
    setSourcePost,
    updateSourcePost,
    deleteSourcePost,
}