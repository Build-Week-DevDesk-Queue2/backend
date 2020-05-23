require('dotenv').config()

const express = require('express')
const server = express()
const userRoutes = require('../api/Routes/userRoutes')
server.use(express.json())

server.use(( err, req, res, next ) => {
  console.error(err)
  next()
})

server.use('/api/users', userRoutes)
module.exports = server
