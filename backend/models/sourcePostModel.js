const mongoose = require('mongoose')

const sourcePostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    sources: [{
        name: String,
        balance: Number,
        currency: String
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('SourcePost', sourcePostSchema)