const jwt = require('jsonwebtoken')
const secret = require('../../config/secret')

module.exports = async ( req, res, next ) => {
  const token = req.headers.authorization

  try {
    if (!token) {
      res.status(401).json({ message: 'Unauthorized' })
    }
    jwt.verify(token, secret.jwt, ( err, decoded ) => {
      if (err) {
        return res.status(401).json({ error: err })
      }
      req.token = decoded
      next()
    })
  } catch (err) {
    next(err)
  }

}
