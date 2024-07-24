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
          projectName: 'Project Alpha',
          title: 'Alpha Title',
          description: 'Description for Project Alpha',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectName: 'Project Beta',
          title: 'Beta Title',
          description: 'Description for Project Beta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectName: 'Project Gamma',
          title: 'Gamma Title',
          description: 'Description for Project Gamma',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectName: 'Project Delta',
          title: 'Delta Title',
          description: 'Description for Project Delta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectName: 'Project Epsilon',
          title: 'Epsilon Title',
          description: 'Description for Project Epsilon',
          createdAt: new Date(),
          updatedAt: new Date()
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
