const express = require('express')
const dotenv = require('dotenv').config()
const goalRoutes = require('./routes/goalRoutes')

const PORT = process.env.PORT || 5000
const app = express()

app.use('/api/goals', goalRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))