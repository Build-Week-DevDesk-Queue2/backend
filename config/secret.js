require('dotenv').config
module.exports = {
  jsonwt: process.env.JWT_KEY || 'secertsquirrel',
}
