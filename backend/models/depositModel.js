const mongoose = require('mongoose')

const depositSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount']
    },
    origin: {
        type: String,
        required: [true, 'Please add an origin']
    },
    currency: {
        type: String,
        required: [true, 'Please add a currency']
    },
    note: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Deposit', depositSchema)