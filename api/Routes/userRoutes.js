const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../helpers/userModel')
const tokenGen = require('../helpers/tokenGen')

const router = express.Router()

router.post('/login', async ( req, res, next ) => {
  const { username, password } = req.body

  const user = await Users.findUserBy({ username })
  try {
    if (!user && !bcrypt.compareSync(user.password, password)) {
      res.status(401).res.json({ message: 'Invaild Creditials' })
    }
    const token = tokenGen(user)
    res.json({ user, token })

  } catch (err) {
    next(err)
  }
})

router.post('/register', async ( req, res, next ) => {
  const { password } = req.body
  const hash = bcrypt.hashSync(password, 16)
  req.body.password = hash
  const newUser = await Users.add(req.body)
  try {
    res.status(201).json({ message: 'new user created', newUser })
  } catch (err) {
    next(err)
  }
})
module.exports = router
