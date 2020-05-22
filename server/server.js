require('dotenv').config()

const express = require('express')
const server = express()
const logger = require('morgan')

server.use(logger('tiny'))
server.use(express.json())

server.get('/', ( req, res, next ) => {
  res.json({ message: 'WELCOME' })
})
module.exports = server
