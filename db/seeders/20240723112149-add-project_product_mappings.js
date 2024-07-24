'use strict'

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    // Insert sample data into the 'project_product_mappings' table
    await queryInterface.bulkInsert(
      'project_product_mappings',
      [
        {
          projectId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 3,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 4,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 5,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    // Remove all records from 'project_product_mappings' table
    await queryInterface.bulkDelete('project_product_mappings', null, {})
  }
}
