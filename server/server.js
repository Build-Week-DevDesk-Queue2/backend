require('dotenv').config()

const express = require('express')
const server = express()
const cors = require('cors')
const userRoutes = require('../api/Routes/userRoutes')
const queueRoutes = require('../api/Routes/queueRoutes')

server.use(cors())
server.use(express.json())

server.use('/api/users', userRoutes)
server.use('/api/queue', queueRoutes)

server.use(( err, req, res, next ) => {
  if (err) {
    res.status(500).json({ message: err })
  }
  next()
})
module.exports = server
