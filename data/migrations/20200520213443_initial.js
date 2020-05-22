exports.up = function ( knex ) {
  return knex.schema
             .createTable('users', ( tbl ) => {
               tbl.increments()
               tbl.string('username', 16).unique().notNullable()
               tbl.string('password', 16).notNullable()
               tbl.string('role').notNullable()
             })
             .createTable('queue', ( tbl ) => {
               tbl.increments()
               tbl.string('title').notNullable()
               tbl.string('issue_type').notNullable()
               tbl.text('have_tried')
               tbl.text('info').notNullable()
               tbl.integer('created_by').unsigned().references('id').inTable('users')
               tbl.date('created_on').defaultTo(Date.now())
               tbl.boolean('assigned').defaultTo(false)
               tbl.integer('assigned_to').unsigned().references('id').inTable('users')
               tbl.boolean('completed').defaultTo(false)
             })
}

exports.down = function ( knex ) {
  return knex.schema.dropTableIfExists('queue').dropTableIfExists('users')
}
