const asyncHandler = require('express-async-handler')
const Deposit = require('../models/depositModel')
const User = require('../models/userModel')

const getDeposits = async (req, res) => {
    const deposits = await Deposit.find({ user: req.user.id })

    res.status(200).json(deposits)
}

const setDeposit = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add a deposit, an object')
    }

    const deposit = await Deposit.create({
        user: req.user.id,
        amount: req.body.amount,
        origin: req.body.origin,
        currency: req.body.currency,
        note: req.body.note,
    })

    res.status(200).json(deposit)
})

const updateDeposit = asyncHandler(async (req, res) => {
    const deposit = await Deposit.findById(req.params.id)

    if (!deposit) {
        res.status(400)
        throw new Error('Deposit not found')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not found')
    }

    if (deposit.user.toString() !== user.id) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedDeposit = await Deposit.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedDeposit)
})

const deleteDeposit = asyncHandler(async (req, res) => {
    const id = req.params.id
    const deposit = await Deposit.findById(id)

    if (!deposit) {
        res.status(400)
        throw new Error('Deposit not found')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not found')
    }

    if (deposit.user.toString() !== user.id) {
        // 401 Unauthorized. Client shouldn't have access to this
        res.status(401)
        throw new Error('User not authorized')
    }

    await deposit.remove()
    res.status(200).json({ id: id })
})

module.exports = {
    getDeposits,
    setDeposit,
    updateDeposit,
    deleteDeposit,
}