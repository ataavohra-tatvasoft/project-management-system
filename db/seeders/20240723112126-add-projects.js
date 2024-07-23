'use strict'

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          project_name: 'Project Alpha',
          title: 'Alpha Title',
          description: 'Description for Project Alpha',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_name: 'Project Beta',
          title: 'Beta Title',
          description: 'Description for Project Beta',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_name: 'Project Gamma',
          title: 'Gamma Title',
          description: 'Description for Project Gamma',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_name: 'Project Delta',
          title: 'Delta Title',
          description: 'Description for Project Delta',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_name: 'Project Epsilon',
          title: 'Epsilon Title',
          description: 'Description for Project Epsilon',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('projects', null, {})
  }
}
