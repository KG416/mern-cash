const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const connectDB = require('./config/db')
const sourcePostRoutes = require('./routes/sourcePostRoutes')
const depositsRoutes = require('./routes/depositsRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()
connectDB()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/sourceposts', sourcePostRoutes)
app.use('/api/deposits', depositsRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))