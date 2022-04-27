const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

const getPosts = async (req, res) => {
    const posts = await Post.find()

    res.status(200).json(posts)
}

const setPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    const post = await Post.create({
        text: req.body.text,
    })

    res.status(200).json(post)
})

const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(400)
        throw new Error('Post not found')
    }

    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedPost)
})

const deletePost = asyncHandler(async (req, res) => {
    const id = req.params.id
    const post = await Post.findById(id)

    if (!post) {
        res.status(400)
        throw new Error('Post not found')
    }

    await post.remove()
    res.status(200).json({ id: id })
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost,
}