const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const signupUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        // 400 Bad Request || blame = client
        res.status(400)
        throw new Error('Please fill out all fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        // 400 Bad Request || blame = client
        res.status(400)
        throw new Error('User aldready exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        // 201 Created || created a resource
        return res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }

    // 400 Bad Request || blame = client
    res.status(400)
    throw new Error('Invalid user data')
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // get requested user from db
    const user = await User.findOne({ email })

    // bcrypt compares = (psw from user input vs hashed psw in db)
    if (user && (await bcrypt.compare(password, user.password))) {
        return res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }

    // 400 Bad Request || blame = client
    res.status(400)
    throw new Error('Invalid credentials')
})

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'get user' })
})

// missing the {}?, this syntax just means we're returning what comes after =>
const generateToken = id =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

module.exports = {
    signupUser,
    loginUser,
    getUser,
}