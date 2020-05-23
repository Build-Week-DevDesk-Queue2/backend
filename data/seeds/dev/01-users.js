exports.seed = function ( knex ) {
  // Deletes ALL existing entries
  return knex('users')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('users').insert([
                                      {
                                        id: 1,
                                        username: 'Germaine',
                                        password: 'testpass',
                                        role: 'helper',
                                      },
                                      {
                                        id: 2,
                                        username: 'Jimbo',
                                        password: 'testpass2',
                                        role: 'student',
                                      },
                                      {
                                        id: 3,
                                        username: 'Kelly',
                                        password: 'testpass3',
                                        role: 'student',
                                      },
                                    ])
      })
}
