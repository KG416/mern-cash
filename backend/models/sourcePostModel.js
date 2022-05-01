const mongoose = require('mongoose')

const sourcePostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        requireed: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('SourcePost', sourcePostSchema)