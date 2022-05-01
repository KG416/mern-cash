const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)

        // process.exit() terminates the node process
        // Status code 1 = Uncaught Fatal Exception: There was an uncaught exception, and it was not handled by a domain or an uncaughtException event handler
        process.exit(1)
    }
}

module.exports = connectDB