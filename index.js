if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production'
}
const server = require('./server/server')

const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log(`=========\n  listening on ${ port }\n=========`)
})
