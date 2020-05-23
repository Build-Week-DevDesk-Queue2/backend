require('dotenv').config()

const express = require('express')
const server = express()
const logger = require('morgan')

const userRoutes = require('../api/Routes/userRoutes')

server.use(logger('tiny'))
server.use(express.json())

server.use(( err, req, res, next ) => {
  console.error(err)
  next()
})

server.use('/api/users', userRoutes)
module.exports = server
