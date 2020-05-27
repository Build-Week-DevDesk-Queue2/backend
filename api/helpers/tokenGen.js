const jwt = require('jsonwebtoken')
const secret = require('../../config/secret')
module.exports = ( user ) => {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }

  const options = {
    expiresIn: '1hr',
  }

  return jwt.sign(payload, secret.jsonwt, options)
}
