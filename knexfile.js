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
    connection: {
      host: process.env.PG_HOST,
      database: process.env.PG_DB,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
