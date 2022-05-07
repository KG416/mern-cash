const mongoose = require('mongoose')

const sourcePostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    sources: [{
        name: {
            type: String,
            required: [true, 'Please add a name']
        },
        balance: {
            type: Number,
            required: [true, 'Please add balance']
        },
        currency: {
            type: String,
            required: [true, 'Please add a currency']
        },
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('SourcePost', sourcePostSchema)