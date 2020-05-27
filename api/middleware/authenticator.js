const jwt = require('jsonwebtoken')
const secret = require('../../config/secret')

module.exports = async ( req, res, next ) => {
  const token = req.headers.authorization
  try {
    if (!token) {
      res.status(401).json({ message: 'Unauthorized' })
    }
    const decoded = await jwt.verify(token, secret.jsonwt)
    req.token = decoded
    next()
  } catch (err) {
    next(err)
  }
}
