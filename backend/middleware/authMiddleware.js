const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    const reqAuth = req.headers.authorization
    let token

    if (reqAuth && reqAuth.startsWith('Bearer')) {
        try {
            // get token from header
            token = reqAuth.split(' ')[1]

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // get user from token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            // 401 Unauthorized. Client shouldn't have access to this
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {
    protect,
}