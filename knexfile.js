// Update with your config settings.
require('dotenv').config()
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/devdesk.db3',
    },
    migrations: {
      directory: './data/migrations/',
    },
    seeds: {
      directory: './data/seeds/dev',
    },
    pool: {
      afterCreate: ( conn, done ) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done) // turn on FK enforcement
      },
    },
  },

  testing: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: 'localhost',
      database: 'devdesk',
      user: 'germaine',
      password: 'devdesk',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations/',
    },
    seeds: {
      directory: './data/seeds/dev',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations/',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds/dev',
    },
  },
}
