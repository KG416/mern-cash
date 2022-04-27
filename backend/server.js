const express = require('express')
const dotenv = require('dotenv').config()
const postRoutes = require('./routes/postRoutes')

const PORT = process.env.PORT || 5000
const app = express()

app.use('/api/posts', postRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))