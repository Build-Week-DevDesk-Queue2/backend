exports.seed = function ( knex ) {
  // Deletes ALL existing entries
  return knex('queue')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('queue').insert([
                                      {
                                        id: 1,
                                        title: 'knex help!!',
                                        issue_type: 'software',
                                        have_tried: 'reinstalled the package',
                                        info: 'need help getting it working',
                                        created_by: 3,
                                      },
                                      {
                                        id: 2,
                                        title: 'knex help!!',
                                        issue_type: 'software',
                                        have_tried: 'reinstalled the package',
                                        info: 'need help getting it working',
                                        created_by: 2,
                                      },
                                      {
                                        id: 3,
                                        title: 'knex help!!',
                                        issue_type: 'software',
                                        have_tried: 'reinstalled the package',
                                        info: 'need help getting it working',
                                        created_by: 3,
                                      },
                                    ])
      })
}
