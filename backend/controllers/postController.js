const asyncHandler = require('express-async-handler')

const getPosts = async (req, res) => {
    res.status(200).json('get all')
}

const setPost = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json('create')
})

const updatePost = asyncHandler(async (req, res) => {
    res.status(200).json(`update ${req.params.id}`)
})

const deletePost = asyncHandler(async (req, res) => {
    res.status(200).json(`delete ${req.params.id}`)
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost,
}