const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const connectDB = require('./config/db')
const postRoutes = require('./routes/postRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()
connectDB()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', postRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))