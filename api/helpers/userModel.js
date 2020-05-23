const db = require('../../data/config')

function findUserBy ( filter ) {
  return db('users').where(filter).first()
}

async function add ( user ) {
  const [ id ] = await db('users').insert(user).returning([ 'id', 'username', 'role' ])

  if (typeof id !== 'object') {
    return findUserBy({ id: id })
  }
  return id
}

module.exports = {
  findUserBy: findUserBy,
  add: add,
}
