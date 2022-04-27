const getPosts = (req, res) => {
    res.status(200).json('get all')
}

const setPost = (req, res) => {
    res.status(200).json('create')
}

const updatePost = (req, res) => {
    res.status(200).json(`update ${req.params.id}`)
}

const deletePost = (req, res) => {
    res.status(200).json(`delete ${req.params.id}`)
}

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost,
}