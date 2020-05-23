const express = require('express')
const router = express.Router()

const Queue = require('../helpers/queueModel')
const authentication = require('../middleware/authenticator')

router.get('/open', authentication, async ( req, res, next ) => {
  const open = await Queue.getOpenTickets()
  res.json(open)
})

module.exports = router
