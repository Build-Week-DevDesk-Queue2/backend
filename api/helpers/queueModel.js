const db = require('../../data/config')

function getOpenTickets () {
  const tickets = db('queue as q')
      .where('completed', false)
      .join('users as u', 'u.id', 'q.created_by')
      .select(
          'q.title as title',
          'q.issue_type as issue',
          'q.have_tried as tried',
          'q.info as' + ' additional info',
          'u.username as created_by',
          'q.completed'
      )
  return tickets
}

module.exports = {
  getOpenTickets: getOpenTickets,
}
