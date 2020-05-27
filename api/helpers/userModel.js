const db = require('../../data/config')

function findUserBy ( filter ) {
  return db('users').where(filter).select('id', 'role', 'username')
}

function add ( user ) {
  const [ id ] = db('users').insert(user).returning([ 'id', 'username', 'role' ])

  if (typeof id !== 'object') {
    return findUserBy({ id: id })
  }
  return id
}

module.exports = {
  findUserBy: findUserBy,
  add: add,
}
